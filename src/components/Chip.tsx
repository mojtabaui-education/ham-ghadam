type ChipProps = {
  label: string
  onDismiss: () => void
}

/**
 * پاسخی که فهرست را محدود کرده.
 *
 * توضیحِ فیگما: ناحیهٔ لمسِ برداشتن ۴۸×۴۸ است در حالی که خودِ چیپ ۳۶ ارتفاع
 * دارد — عمدی، برای رسیدن به حداقلِ نقطهٔ لمس. پس دکمهٔ × از چیپ بیرون
 * می‌زند و با overflow-visible بیرون‌زدگی‌اش حفظ می‌شود.
 */
export function Chip({ label, onDismiss }: ChipProps) {
  return (
    <div className="flex h-9 shrink-0 items-center gap-2 rounded-control bg-surface ps-3">
      <span className="type-caption whitespace-nowrap text-ink">{label}</span>

      <button
        type="button"
        onClick={onDismiss}
        aria-label={`برداشتن ${label}`}
        className="type-body flex size-12 shrink-0 items-center justify-center text-ink-muted"
      >
        ×
      </button>
    </div>
  )
}
