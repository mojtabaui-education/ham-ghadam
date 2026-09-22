import { useEffect, useState } from 'react'

import { station2 } from './content/station2'
import { therapists } from './content/therapists'
import { Results } from './screens/Results'
import { Station1, type Station1Answer } from './screens/Station1'
import { Station2, type Station2Answer } from './screens/Station2'

type Step = 'station1' | 'station2' | 'results'

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

  // تا وقتی صفحه‌های خروج، آفلاین و بدون‌نتیجه ساخته نشده‌اند، کارهایی که
  // مقصدشان آن‌هاست روی کنسول نوشته می‌شوند.
  function log(message: string, payload?: unknown) {
    console.log(message, payload ?? '')
  }

  if (step === 'station1') {
    return (
      <Station1
        initial={answer1}
        onContinue={(answer) => {
          setAnswer1(answer)
          setStep('station2')
        }}
        onSkip={() => setStep('station2')}
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
          setStep('results')
        }}
        onSkip={() => {
          setAnswer2({ optionIds: [] })
          setStep('results')
        }}
        onBack={() => setStep('station1')}
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
      onQuit={() => log('بستن مسیر · نتایج', { answer1, answer2 })}
      onBack={() => setStep('station2')}
    />
  )
}

export default App
