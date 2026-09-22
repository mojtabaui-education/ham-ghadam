import { affectingText, results } from '../content/results'
import { Chip } from './Chip'

export type Criterion = { id: string; label: string }

type CriterionSectionProps = {
  criteria: Criterion[]
  onRemove: (id: string) => void
  onEdit: () => void
}

/**
 * سرِ صفحهٔ فهرست: چرا این فهرست این است، و راهِ عوض کردنش.
 *
 * صفحهٔ بارگذاری هم همین بخش را دارد — فهرست هنوز نیامده ولی قیدها از قبل
 * معلوم‌اند، پس کاربر در تمامِ مدتِ انتظار می‌داند منتظرِ چیست.
 *
 * وقتی هیچ قیدی نیست (فریمِ s3-2) جملهٔ «... اثر گذاشته‌اند» و ردیفِ چیپ‌ها
 * هر دو می‌روند و فقط جملهٔ اول و پیوندِ ویرایش می‌ماند.
 */
export function CriterionSection({
  criteria,
  onRemove,
  onEdit,
}: CriterionSectionProps) {
  return (
    <section className="flex w-full flex-col gap-3 text-start">
      <p className="type-body w-full text-ink-secondary">{results.criterion}</p>

      {criteria.length > 0 && (
        <>
          <p className="type-caption w-full text-ink-muted">
            {affectingText(criteria.map((item) => item.label))}
          </p>

          <div className="flex w-full flex-wrap gap-2">
            {criteria.map((item) => (
              <Chip
                key={item.id}
                label={item.label}
                onDismiss={() => onRemove(item.id)}
              />
            ))}
          </div>
        </>
      )}

      <button
        type="button"
        onClick={onEdit}
        className="type-caption w-full text-start text-accent"
      >
        {results.editLink}
      </button>
    </section>
  )
}
