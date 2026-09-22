type QuestionHeaderProps = {
  title: string
  subtitle?: string
}

/**
 * پرسشِ ایستگاه.
 *
 * سطر ۳ روبریک (از توضیحِ فیگما): عنوان دربارهٔ موقعیت می‌پرسد، نه دربارهٔ
 * وضعیتِ بالینی. سطر ۱: هر دو رشته زیرِ ۹۰ نویسه.
 */
export function QuestionHeader({ title, subtitle }: QuestionHeaderProps) {
  return (
    <header className="flex w-full flex-col gap-2 text-start">
      <h1 className="type-question w-full text-ink">{title}</h1>
      {subtitle && (
        <p className="type-caption-paragraph w-full text-ink-muted">
          {subtitle}
        </p>
      )}
    </header>
  )
}
