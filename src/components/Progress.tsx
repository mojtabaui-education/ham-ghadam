type ProgressProps = {
  /** ایستگاهِ فعلی، از ۱ شروع می‌شود. */
  step: number
  total: number
  /** جمله‌ای که طولِ مسیر را می‌گوید، نه درصد را. */
  caption: string
}

/**
 * طولِ مسیر.
 *
 * توضیحِ فیگما این کامپوننت را با ⚑ «بی‌لنگر» علامت زده: هیچ یوزکیسی
 * نخواسته‌اش و تصمیمِ آدم است (بند ۷۳ decisions.md). یعنی اگر در تست معلوم
 * شد کاربر نگاهش نمی‌کند، برداشتنش هزینه‌ای ندارد.
 */
export function Progress({ step, total, caption }: ProgressProps) {
  const percent = Math.min(100, Math.max(0, (step / total) * 100))

  return (
    <div
      className="flex w-full flex-col gap-2"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={step}
      aria-valuetext={caption}
    >
      <div className="h-1 w-full overflow-hidden rounded-pill bg-muted">
        <div
          className="h-full rounded-pill bg-accent"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="type-meta w-full text-ink-muted">{caption}</p>
    </div>
  )
}
