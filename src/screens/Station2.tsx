import { useState } from 'react'

import { BottomActions } from '../components/BottomActions'
import { NavRow } from '../components/NavRow'
import { Progress } from '../components/Progress'
import { QuestionHeader } from '../components/QuestionHeader'
import { Tag } from '../components/Tag'
import { station2 } from '../content/station2'
import { optionLabel } from '../content/types'

export type Station2Answer = {
  /** شناسهٔ گزینه‌های انتخاب‌شده در هر دو گروه، یکجا. */
  optionIds: string[]
}

type Station2Props = {
  initial?: Station2Answer
  onContinue: (answer: Station2Answer) => void
  onSkip: () => void
  onBack: () => void
}

/**
 * ایستگاه ۲ — زمان و شیوهٔ برگزاری.
 *
 * فریم‌های s2-1 تا s2-3 در فیگما همین یک صفحه‌اند در سه مرحله از انتخاب،
 * و s2-4 همان صفحه است وقتی کاربر از نتایج برگشته. هر چهارتا با state
 * درمی‌آیند.
 *
 * دو فرقِ ساختاری با ایستگاه ۱: زیرنویس ندارد (واریانتِ Subtitle?=False)
 * و گزینه‌ها دو گروهِ عنوان‌دارند با فاصلهٔ ۲۴ بینشان و ۸ درونشان — نه ۱۲
 * مثلِ ایستگاه ۱.
 */
export function Station2({
  initial,
  onContinue,
  onSkip,
  onBack,
}: Station2Props) {
  const [selected, setSelected] = useState<string[]>(initial?.optionIds ?? [])

  function toggleOption(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col bg-page px-6 pt-8 pb-8">
      <div className="flex flex-col gap-8">
        <NavRow
          icon="back"
          actionLabel={station2.actions.back}
          onAction={onBack}
        />

        <Progress
          step={station2.progress.step}
          total={station2.progress.total}
          caption={station2.progress.caption}
        />

        <QuestionHeader title={station2.question.title} />

        <div className="flex w-full flex-col gap-6">
          {station2.groups.map((group) => (
            <div key={group.id} className="flex w-full flex-col gap-2">
              <p className="type-caption-paragraph w-full text-start text-ink-muted">
                {group.heading}
              </p>

              {group.options.map((option) => (
                <Tag
                  key={option.id}
                  label={optionLabel(option)}
                  selected={selected.includes(option.id)}
                  onToggle={() => toggleOption(option.id)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto w-full pt-18">
        <BottomActions
          primaryLabel={station2.actions.primary}
          onPrimary={() => onContinue({ optionIds: selected })}
          primaryDisabled={selected.length === 0}
          skipLabel={station2.actions.skip}
          onSkip={onSkip}
        />
      </div>
    </div>
  )
}
