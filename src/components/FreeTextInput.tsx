type FreeTextInputProps = {
  value: string
  placeholder: string
  onChange: (value: string) => void
  /** وقتی کاربر Enter زد یا از کادر بیرون رفت. */
  onCommit: () => void
}

/**
 * جای نوشتنِ واژهٔ خودِ کاربر.
 *
 * توضیحِ فیگما: وزنِ فونت در هر سه حالت یکی است — تایپ کردن نباید متن را
 * بپراند. حالت با رنگ و پس‌زمینه گفته می‌شود، فوکوس با یک خطِ یک‌پیکسلی.
 *
 * برای اینکه خطِ فوکوس چیزی را جابه‌جا نکند، حاشیه در هر سه حالت هست و فقط
 * رنگش عوض می‌شود؛ وگرنه کادر موقعِ فوکوس یک پیکسل تکان می‌خورد.
 */
export function FreeTextInput({
  value,
  placeholder,
  onChange,
  onCommit,
}: FreeTextInputProps) {
  const filled = value.trim().length > 0

  return (
    <input
      type="text"
      // با dir="auto" جهت از اولین نویسهٔ قوی گرفته می‌شود، و placeholder با
      // ایموجی شروع می‌شود که خنثی است — پس کادر قبل از تایپ چپ‌چین می‌افتاد.
      dir="rtl"
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      onBlur={onCommit}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault()
          onCommit()
        }
      }}
      className={[
        'type-label h-12 w-full rounded-control border ps-3 pe-4',
        'text-start text-ink outline-none placeholder:text-ink-muted',
        filled ? 'bg-muted' : 'bg-surface',
        'border-transparent focus:border-ink focus:bg-surface',
      ].join(' ')}
    />
  )
}
