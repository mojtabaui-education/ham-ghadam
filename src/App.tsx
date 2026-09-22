import { useEffect, useState } from 'react'

import { emptyState, noAnswers } from './content/empty'
import { station2 } from './content/station2'
import { therapists } from './content/therapists'
import { EmptyState } from './screens/EmptyState'
import { Results } from './screens/Results'
import { Station1, type Station1Answer } from './screens/Station1'
import { Station2, type Station2Answer } from './screens/Station2'

type Step = 'station1' | 'station2' | 'results' | 'empty'

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
  const [skipped2, setSkipped2] = useState(false)

  // هر ایستگاه از بالا شروع می‌شود؛ وگرنه کاربر وسطِ صفحهٔ بعدی می‌افتد.
  useEffect(() => {
    window.scrollTo(0, 0)
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

  function removeCriterion(id: string) {
    setAnswer2((current) => ({
      optionIds: (current?.optionIds ?? []).filter((item) => item !== id),
    }))
  }

  /** رد کردنِ هر دو پرسش یعنی هیچ سیگنالی نداریم؛ فهرست ساخته نمی‌شود. */
  function skipStation2() {
    setSkipped2(true)
    setAnswer2({ optionIds: [] })
    setStep(skipped1 ? 'empty' : 'results')
  }

  function restart() {
    setAnswer1(undefined)
    setAnswer2(undefined)
    setSkipped1(false)
    setSkipped2(false)
    setStep('station1')
  }

  // تا وقتی صفحه‌های خروج و آفلاین ساخته نشده‌اند، کارهایی که مقصدشان
  // آن‌هاست روی کنسول نوشته می‌شوند.
  function log(message: string, payload?: unknown) {
    console.log(message, payload ?? '')
  }

  if (step === 'station1') {
    return (
      <Station1
        initial={answer1}
        onContinue={(answer) => {
          setAnswer1(answer)
          setSkipped1(false)
          setStep('station2')
        }}
        onSkip={() => {
          setAnswer1(undefined)
          setSkipped1(true)
          setStep('station2')
        }}
        onClose={() => log('بستنِ مسیر · ایستگاه ۱')}
      />
    )
  }

  if (step === 'station2') {
    return (
      <Station2
        initial={answer2}
        onContinue={(answer) => {
          setAnswer2(answer)
          setSkipped2(false)
          setStep('results')
        }}
        onSkip={skipStation2}
        onBack={() => setStep('station1')}
      />
    )
  }

  if (step === 'empty') {
    return (
      <EmptyState
        echo={noAnswers.echo}
        actionLabel={noAnswers.actionLabel}
        onAction={restart}
        backLabel={emptyState.back}
        onBack={() => setStep('station2')}
      />
    )
  }

  return (
    <Results
      therapists={therapists}
      criteria={criteria}
      onRemoveCriterion={removeCriterion}
      onEditAnswers={() => setStep('station2')}
      onPickTherapist={(id) => log('دیدن زمان‌های آزاد', id)}
      onQuit={() => log('بستن مسیر · نتایج', { answer1, answer2, skipped2 })}
      onBack={() => setStep('station2')}
    />
  )
}

export default App
