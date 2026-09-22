import { Chip } from '../components/Chip'
import { NavRow } from '../components/NavRow'
import { ResultCard, type Therapist } from '../components/ResultCard'
import { affectingText, results } from '../content/results'

type ResultsProps = {
  therapists: Therapist[]
  /** پاسخ‌هایی که فهرست را محدود کرده‌اند، به ترتیبِ انتخاب. */
  criteria: { id: string; label: string }[]
  onRemoveCriterion: (id: string) => void
  onEditAnswers: () => void
  onPickTherapist: (id: string) => void
  onQuit: () => void
  onBack: () => void
}

/**
 * ایستگاه ۳ — فهرست.
 *
 * فریمِ s3-1 وقتی است که قیدی روی فهرست هست، و s3-2 وقتی که نیست: آنجا
 * جملهٔ «... روی این فهرست اثر گذاشته‌اند» و ردیفِ چیپ‌ها هر دو حذف می‌شوند
 * و فقط جملهٔ اول و پیوندِ ویرایش می‌ماند. پس هر دو با یک شرط درمی‌آیند.
 */
export function Results({
  therapists,
  criteria,
  onRemoveCriterion,
  onEditAnswers,
  onPickTherapist,
  onQuit,
  onBack,
}: ResultsProps) {
  const hasCriteria = criteria.length > 0

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col gap-6 bg-page px-6 pt-8 pb-6">
      <NavRow icon="back" actionLabel={results.back} onAction={onBack} />

      <section className="flex w-full flex-col gap-3 text-start">
        <p className="type-body w-full text-ink-secondary">
          {results.criterion}
        </p>

        {hasCriteria && (
          <>
            <p className="type-caption w-full text-ink-muted">
              {affectingText(criteria.map((item) => item.label))}
            </p>

            <div className="flex w-full flex-wrap gap-2">
              {criteria.map((item) => (
                <Chip
                  key={item.id}
                  label={item.label}
                  onDismiss={() => onRemoveCriterion(item.id)}
                />
              ))}
            </div>
          </>
        )}

        <button
          type="button"
          onClick={onEditAnswers}
          className="type-caption w-full text-start text-accent"
        >
          {results.editLink}
        </button>
      </section>

      <div className="flex w-full flex-col gap-3">
        {therapists.map((therapist) => (
          <ResultCard
            key={therapist.id}
            therapist={therapist}
            actionLabel={results.cardAction}
            onAction={() => onPickTherapist(therapist.id)}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onQuit}
        className="type-button w-full text-center text-ink-muted"
      >
        {results.quit}
      </button>
    </div>
  )
}
