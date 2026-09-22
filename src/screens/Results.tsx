import { CriterionSection, type Criterion } from '../components/CriterionSection'
import { NavRow } from '../components/NavRow'
import { ResultCard, type Therapist } from '../components/ResultCard'
import { results } from '../content/results'

type ResultsProps = {
  therapists: Therapist[]
  /** پاسخ‌هایی که فهرست را محدود کرده‌اند، به ترتیبِ انتخاب. */
  criteria: Criterion[]
  onRemoveCriterion: (id: string) => void
  onEditAnswers: () => void
  onPickTherapist: (id: string) => void
  onQuit: () => void
  onBack: () => void
}

/** ایستگاه ۳ — فهرست. */
export function Results({
  therapists,
  criteria,
  onRemoveCriterion,
  onEditAnswers,
  onPickTherapist,
  onQuit,
  onBack,
}: ResultsProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col gap-6 bg-page px-6 pt-8 pb-6">
      <NavRow icon="back" actionLabel={results.back} onAction={onBack} />

      <CriterionSection
        criteria={criteria}
        onRemove={onRemoveCriterion}
        onEdit={onEditAnswers}
      />

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
