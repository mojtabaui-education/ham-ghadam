import { useState } from 'react'

import { BottomActions } from '../components/BottomActions'
import { FreeTextInput } from '../components/FreeTextInput'
import { NavRow } from '../components/NavRow'
import { Progress } from '../components/Progress'
import { QuestionHeader } from '../components/QuestionHeader'
import { Tag } from '../components/Tag'
import { station1 } from '../content/station1'
import { optionLabel } from '../content/types'

export type Station1Answer = {
  /** شناسهٔ گزینه‌های انتخاب‌شده. */
  tagIds: string[]
  ownWords: string[]
}

type Station1Props = {
  initial?: Station1Answer
  onContinue: (answer: Station1Answer) => void
  onSkip: () => void
  onClose: () => void
}

/**
 * ایستگاه ۱ — «این روزها بیشتر درگیر چه چیزی هستید؟»
 *
 * شش حالتی که در فیگما فریمِ جدا دارند، اینجا یک صفحه‌اند با state:
 *   first-state       → هیچ انتخابی نیست، «ادامه» غیرفعال
 *   answer-picked     → یک یا چند تگ انتخاب شده، «ادامه» فعال
 *   free-text-written → یک ورودیِ پرشده، و یک ورودیِ خالیِ تازه زیرش
 *   scrolled          → همان، با ورودی‌های بیشتر؛ صفحه بلند می‌شود
 *   combined          → تگ و متنِ آزاد با هم
 *   skipped           → «رد می‌کنم»
 *
 * انتخابِ تگ‌ها چندتایی است: فریمِ answer-picked دو تگِ انتخاب‌شده دارد.
 */
export function Station1({
  initial,
  onContinue,
  onSkip,
  onClose,
}: Station1Props) {
  const [selected, setSelected] = useState<string[]>(initial?.tagIds ?? [])
  const [ownWords, setOwnWords] = useState<string[]>(initial?.ownWords ?? [])
  const [draft, setDraft] = useState('')

  const hasAnswer =
    selected.length > 0 || ownWords.length > 0 || draft.trim().length > 0

  function toggleTag(id: string) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  /** متنِ نوشته‌شده را به فهرست می‌برد و کادرِ خالیِ بعدی را باز می‌کند. */
  function commitDraft() {
    const trimmed = draft.trim()
    if (trimmed.length === 0) return
    setOwnWords((current) => [...current, trimmed])
    setDraft('')
  }

  function editWord(index: number, value: string) {
    setOwnWords((current) =>
      current.map((word, position) => (position === index ? value : word)),
    )
  }

  /** پاک کردنِ متنِ یک کادر، همان کادر را برمی‌دارد. */
  function commitWord(index: number) {
    setOwnWords((current) =>
      current.filter((word, position) =>
        position === index ? word.trim().length > 0 : true,
      ),
    )
  }

  function handleContinue() {
    const trimmed = draft.trim()
    onContinue({
      tagIds: selected,
      ownWords: trimmed.length > 0 ? [...ownWords, trimmed] : ownWords,
    })
  }

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col bg-page px-6 pt-8 pb-8">
      <div className="flex flex-col gap-8">
        <NavRow
          icon="close"
          actionLabel={station1.actions.close}
          onAction={onClose}
        />

        <Progress
          step={station1.progress.step}
          total={station1.progress.total}
          caption={station1.progress.caption}
        />

        <QuestionHeader
          title={station1.question.title}
          subtitle={station1.question.subtitle}
        />

        <div className="flex w-full flex-col gap-3">
          {station1.tags.map((option) => (
            <Tag
              key={option.id}
              label={optionLabel(option)}
              selected={selected.includes(option.id)}
              onToggle={() => toggleTag(option.id)}
            />
          ))}

          {ownWords.map((word, index) => (
            <FreeTextInput
              // ترتیب، هویتِ کادر است: کادرِ دوم همیشه کادرِ دوم می‌ماند.
              key={`own-word-${index}`}
              value={word}
              placeholder={station1.freeTextPlaceholder}
              onChange={(value) => editWord(index, value)}
              onCommit={() => commitWord(index)}
            />
          ))}

          <FreeTextInput
            value={draft}
            placeholder={station1.freeTextPlaceholder}
            onChange={setDraft}
            onCommit={commitDraft}
          />
        </div>
      </div>

      {/* mt-auto وقتی محتوا کوتاه است پایین نگهش می‌دارد،
          pt-18 وقتی محتوا بلند شد فاصلهٔ ۷۲ طرح را تضمین می‌کند. */}
      <div className="mt-auto w-full pt-18">
        <BottomActions
          primaryLabel={station1.actions.primary}
          onPrimary={handleContinue}
          primaryDisabled={!hasAnswer}
          skipLabel={station1.actions.skip}
          onSkip={onSkip}
        />
      </div>
    </div>
  )
}
