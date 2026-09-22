export type Therapist = {
  id: string
  name: string
  photo: string
  /** مدت جلسه */
  duration: string
  /** قیمت جلسه */
  price: string
  /** به قلم درمانگر */
  ownWords: string
  /** شیوه برگزاری */
  format: string
}

type ResultCardProps = {
  therapist: Therapist
  actionLabel: string
  onAction: () => void
}

function CardField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-1 text-start">
      <p className="type-caption w-full text-ink-muted">{label}</p>
      <p className="type-body w-full text-ink-secondary">{value}</p>
    </div>
  )
}

/**
 * یک موردِ فهرست.
 *
 * توضیحِ فیگما، سطر ۴ روبریک: هیچ امتیاز، رتبه و صفتِ برتری روی کارت نیست.
 * چهار قلم، همیشه هر چهارتا — و توضیحِ card-field می‌گوید هیچ موردی با قلمِ
 * ناقص نمایش داده نمی‌شود، برای همین هر چهار قلم در تایپ اجباری‌اند.
 */
export function ResultCard({
  therapist,
  actionLabel,
  onAction,
}: ResultCardProps) {
  return (
    <article className="flex w-full flex-col gap-4 rounded-card bg-surface p-6">
      <div className="flex w-full items-center gap-3">
        <img
          src={therapist.photo}
          alt=""
          width={48}
          height={48}
          className="size-12 shrink-0 rounded-pill object-cover"
        />
        <h2 className="type-card-title min-w-0 flex-1 text-start text-ink">
          {therapist.name}
        </h2>
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-start gap-2">
          <CardField label="مدت جلسه" value={therapist.duration} />
          <CardField label="قیمت جلسه" value={therapist.price} />
        </div>
        <div className="flex w-full items-start gap-2">
          <CardField label="به قلم درمانگر" value={therapist.ownWords} />
          <CardField label="شیوه برگزاری" value={therapist.format} />
        </div>
      </div>

      <button
        type="button"
        onClick={onAction}
        className="type-button flex h-12 w-full items-center justify-center rounded-control bg-inverse px-6 text-on-inverse"
      >
        {actionLabel}
      </button>
    </article>
  )
}
