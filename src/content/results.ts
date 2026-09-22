/**
 * متنِ صفحهٔ نتایج — از فریم s3-1.
 */

export const results = {
  criterion: 'این فهرست بر اساس چیزهایی چیده شده که خودتان گفتید.',
  editLink: 'عوض کردن یکی از پاسخ‌ها',
  cardAction: 'دیدن زمان‌های آزاد',
  quit: 'بستن مسیر',
  back: 'برگشتن به پرسشِ قبل',
}

/**
 * «الف» و «ب» روی این فهرست اثر گذاشته‌اند.
 *
 * فریمِ فیگما دقیقاً دو پاسخ دارد و با «و» به هم وصلشان می‌کند. چون تعدادِ
 * واقعی به انتخابِ کاربر بستگی دارد، سه تا و بیشتر با ویرگول می‌آید و فقط
 * آخری «و» می‌گیرد.
 */
export function affectingText(labels: string[]): string {
  const quoted = labels.map((label) => `«${label}»`)

  const joined =
    quoted.length <= 1
      ? (quoted[0] ?? '')
      : `${quoted.slice(0, -1).join('، ')} و ${quoted[quoted.length - 1]}`

  return `${joined} روی این فهرست اثر گذاشته‌اند.`
}
