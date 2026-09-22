import { useEffect, useState } from 'react'

import { BookGlyph, CloudGlyph, LensGlyph } from './components/glyphs'
import { noAnswers } from './content/empty'
import { station1 } from './content/station1'
import { station2 } from './content/station2'
import { offline, quit } from './content/states'
import { therapists } from './content/therapists'
import { optionLabel } from './content/types'
import { Consent } from './screens/Consent'
import { Loading } from './screens/Loading'
import { Results } from './screens/Results'
import { StateScreen } from './screens/StateScreen'
import { Station1, type Station1Answer } from './screens/Station1'
import { Station2, type Station2Answer } from './screens/Station2'

type Step =
  | 'station1'
  | 'consent'
  | 'station2'
  | 'loading'
  | 'results'
  | 'empty'
  | 'quit'

/** چقدر اسکلتِ فهرست بماند. کوتاه‌تر از این دیده نمی‌شود، بلندتر آزاردهنده است. */
const LOADING_MS = 1200

const station1Labels = new Map(
  station1.tags.map((option) => [option.id, optionLabel(option)] as const),
)

/** شناسهٔ گزینه‌های ایستگاه ۲ به متنشان — چیپ‌های صفحهٔ نتایج از اینجا می‌آیند. */
const station2Labels = new Map(
  station2.groups.flatMap((group) =>
    group.options.map((option) => [option.id, option.text] as const),
  ),
)

function App() {
  const [step, setStep] = useState<Step>('station1')
  const [answer1, setAnswer1] = useState<Station1Answer>()
  const [answer2, setAnswer2] = useState<Station2Answer>()
  const [skipped1, setSkipped1] = useState(false)
  const [isOffline, setIsOffline] = useState(!navigator.onLine)

  // هر ایستگاه از بالا شروع می‌شود؛ وگرنه کاربر وسطِ صفحهٔ بعدی می‌افتد.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  // قطعِ اتصال، جای صفحهٔ فعلی را می‌گیرد ولی `step` را دست نمی‌زند، پس با
  // برگشتنِ شبکه کاربر دقیقاً همان‌جایی است که بود.
  useEffect(() => {
    const goOnline = () => setIsOffline(false)
    const goOffline = () => setIsOffline(true)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  // فهرست ساختگی است، پس انتظارش هم ساختگی است — ولی صفحهٔ بارگذاری باید
  // در تست دیده شود، چون روی شبکهٔ کند همین است که کاربر می‌بیند.
  useEffect(() => {
    if (step !== 'loading') return
    const timer = window.setTimeout(() => setStep('results'), LOADING_MS)
    return () => window.clearTimeout(timer)
  }, [step])

  /**
   * قیدهای فهرست، از پاسخ‌های ایستگاه ۲.
   *
   * حدس: فیگما نمی‌گوید چیپ‌ها کدام پاسخ‌اند. ایستگاه ۲ انتخاب شد چون
   * پاسخ‌هایش قیدِ واقعی‌اند — برداشتنشان با × فهرست را بازتر می‌کند —
   * در حالی که پاسخ‌های ایستگاه ۱ حالِ کاربرند، نه فیلتر.
   */
  const criteria = (answer2?.optionIds ?? []).map((id) => ({
    id,
    label: station2Labels.get(id) ?? id,
  }))

  /** همان چیزهایی که کاربر در ایستگاه ۱ گفت، برای نشان دادن در رضایت‌نامه. */
  const kept = [
    ...(answer1?.tagIds ?? []).map((id) => station1Labels.get(id) ?? id),
    ...(answer1?.ownWords ?? []),
  ]

  function removeCriterion(id: string) {
    setAnswer2((current) => ({
      optionIds: (current?.optionIds ?? []).filter((item) => item !== id),
    }))
  }

  /** رد کردنِ هر دو پرسش یعنی هیچ سیگنالی نداریم؛ فهرست ساخته نمی‌شود. */
  function skipStation2() {
    setAnswer2({ optionIds: [] })
    setStep(skipped1 ? 'empty' : 'loading')
  }

  function restart() {
    setAnswer1(undefined)
    setAnswer2(undefined)
    setSkipped1(false)
    setStep('station1')
  }

  function log(message: string, payload?: unknown) {
    console.log(message, payload ?? '')
  }

  if (isOffline) {
    return (
      <StateScreen
        glyph={<CloudGlyph />}
        echo={offline.echo}
        action={{
          label: offline.action,
          // شبکه که برگردد رویدادِ online خودش صفحه را برمی‌گرداند؛ این دکمه
          // برای وقتی است که مرورگر هنوز خبر ندارد.
          onAction: () => setIsOffline(!navigator.onLine),
        }}
        nav={{
          icon: 'close',
          label: offline.close,
          onAction: () => setStep('quit'),
        }}
      />
    )
  }

  if (step === 'station1') {
    return (
      <Station1
        initial={answer1}
        onContinue={(answer) => {
          setAnswer1(answer)
          setSkipped1(false)
          // چیزی گفته نشده یعنی چیزی برای نگه داشتن نیست؛ رضایت‌نامه رد می‌شود.
          setStep(
            answer.tagIds.length + answer.ownWords.length > 0
              ? 'consent'
              : 'station2',
          )
        }}
        onSkip={() => {
          setAnswer1(undefined)
          setSkipped1(true)
          setStep('station2')
        }}
        onClose={() => setStep('quit')}
      />
    )
  }

  if (step === 'consent') {
    return (
      <Consent
        kept={kept}
        onAgree={() => {
          log('رضایت‌نامه · موافقم', kept)
          setStep('station2')
        }}
        onContinueWithout={() => {
          log('رضایت‌نامه · ادامه بدون نگه داشتن')
          setStep('station2')
        }}
        onClose={() => setStep('quit')}
      />
    )
  }

  if (step === 'station2') {
    return (
      <Station2
        initial={answer2}
        onContinue={(answer) => {
          setAnswer2(answer)
          setStep('loading')
        }}
        onSkip={skipStation2}
        onBack={() => setStep('station1')}
      />
    )
  }

  if (step === 'loading') {
    return (
      <Loading
        criteria={criteria}
        onRemoveCriterion={removeCriterion}
        onEditAnswers={() => setStep('station2')}
        onBack={() => setStep('station2')}
      />
    )
  }

  if (step === 'empty') {
    return (
      <StateScreen
        glyph={<LensGlyph />}
        echo={noAnswers.echo}
        action={{ label: noAnswers.actionLabel, onAction: restart }}
        nav={{
          icon: 'back',
          label: 'برگشتن به پرسشِ قبل',
          onAction: () => setStep('station2'),
        }}
      />
    )
  }

  if (step === 'quit') {
    // فریمِ خروج در فیگما هیچ کاری ندارد — نه دکمه، نه سطرِ بالا با کارِ فعال.
    return <StateScreen glyph={<BookGlyph />} echo={quit.echo} cause={quit.cause} />
  }

  return (
    <Results
      therapists={therapists}
      criteria={criteria}
      onRemoveCriterion={removeCriterion}
      onEditAnswers={() => setStep('station2')}
      onPickTherapist={(id) => log('دیدن زمان‌های آزاد', id)}
      onQuit={() => setStep('quit')}
      onBack={() => setStep('station2')}
    />
  )
}

export default App
