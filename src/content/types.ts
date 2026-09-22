/**
 * گزینهٔ بستهٔ یک پرسش.
 *
 * ایموجی از متن جدا نگه داشته می‌شود چون در دو جا دو جور دیده می‌شود:
 * روی تگ با ایموجی، و روی چیپِ صفحهٔ نتایج بدونِ ایموجی.
 */
export type Option = {
  id: string
  emoji: string
  text: string
}

/** فاصلهٔ دوتایی بینِ ایموجی و متن، همان‌طور که در فیگما هست. */
export function optionLabel(option: Option): string {
  return `${option.emoji}  ${option.text}`
}
