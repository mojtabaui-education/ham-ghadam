type TagProps = {
  label: string
  selected: boolean
  onToggle: () => void
}

/**
 * گزینهٔ بستهٔ فلوی پرسش.
 *
 * توضیحِ فیگما: تمام‌عرض، ارتفاع ۴۸ (نقطهٔ لمس). انتخاب فقط با پس‌زمینه
 * نشان داده می‌شود، نه با رنگِ متن — پس رنگِ متن در هر دو حالت یکی است.
 */
export function Tag({ label, selected, onToggle }: TagProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={selected}
      className={[
        'type-label flex h-12 w-full items-center rounded-control ps-3 pe-4',
        'text-start whitespace-pre-wrap text-ink',
        selected ? 'bg-muted' : 'bg-surface',
      ].join(' ')}
    >
      {label}
    </button>
  )
}
