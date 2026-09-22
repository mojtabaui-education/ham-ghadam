import avatar from '../assets/illustrations/skeleton-avatar.svg'

/** یک میلهٔ خالی. عرضش از فیگما می‌آید تا سطرها هم‌شکل نباشند. */
function Bar({ height, width }: { height: number; width: number }) {
  return (
    <div
      className="shrink-0 rounded-inset bg-muted"
      style={{ height, width }}
    />
  )
}

function SkeletonField({ label, value }: { label: number; value: number }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
      <Bar height={10} width={label} />
      <Bar height={12} width={value} />
    </div>
  )
}

/**
 * حالتِ بارگذاریِ یک کارت.
 *
 * توضیحِ فیگما: هیچ متنی ندارد چون هیچ رشته‌ای پیش از رسیدنِ داده نوشته
 * نمی‌شود — همان ساختارِ result-card، خالی.
 */
export function SkeletonCard() {
  return (
    <div className="flex w-full flex-col items-start gap-4 rounded-card bg-surface p-6">
      <div className="flex w-full items-center justify-between gap-3">
        <img src={avatar} alt="" className="size-12 shrink-0" />
        <Bar height={16} width={120} />
      </div>

      <div className="flex w-full flex-col items-start gap-2">
        <div className="flex w-full items-start gap-2">
          <SkeletonField label={64} value={96} />
          <SkeletonField label={72} value={104} />
        </div>
        <div className="flex w-full items-start gap-2">
          <SkeletonField label={80} value={120} />
          <SkeletonField label={68} value={92} />
        </div>
      </div>

      <div className="h-12 w-full shrink-0 rounded-control bg-muted" />
    </div>
  )
}
