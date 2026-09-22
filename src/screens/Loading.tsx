import { CriterionSection, type Criterion } from '../components/CriterionSection'
import { NavRow } from '../components/NavRow'
import { SkeletonCard } from '../components/SkeletonCard'
import { results } from '../content/results'

type LoadingProps = {
  criteria: Criterion[]
  onRemoveCriterion: (id: string) => void
  onEditAnswers: () => void
  onBack: () => void
}

/**
 * فهرست در حالِ آمدن — فریمِ s3-3.
 *
 * سه اسکلت به همان تعدادِ کارتی که قرار است بیاید. فاصلهٔ سرِ صفحه اینجا ۳۲
 * است نه ۲۴ مثلِ فهرستِ آماده، چون جملهٔ «فهرست دارد آماده می‌شود.» یک سطرِ
 * اضافه است.
 */
export function Loading({
  criteria,
  onRemoveCriterion,
  onEditAnswers,
  onBack,
}: LoadingProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col gap-8 bg-page px-6 pt-8 pb-16">
      <NavRow icon="back" actionLabel={results.back} onAction={onBack} />

      <CriterionSection
        criteria={criteria}
        onRemove={onRemoveCriterion}
        onEdit={onEditAnswers}
      />

      <p
        className="type-body w-full text-start text-ink-secondary"
        role="status"
      >
        {results.loading}
      </p>

      <div className="flex w-full flex-col gap-3" aria-hidden="true">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}
