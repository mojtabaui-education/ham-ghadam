import type { ReactNode } from 'react'

/**
 * اجزای تکرارشوندهٔ کیس‌استادی.
 *
 * طرح روی قابِ ۱۹۲۰ کشیده شده و اندازه‌ها همان‌جا ثابت‌اند. اینجا با clamp
 * می‌آیند تا روی لپ‌تاپ و موبایل هم بخواند: کفِ هر clamp اندازهٔ موبایل است،
 * سقفش عددِ فیگما، و وسطش نسبتِ همان عدد به ۱۹۲۰.
 *
 * ترتیبِ عناصر در کدِ فیگما چپ‌به‌راست است. این صفحه راست‌چین است، پس هر
 * ردیف اینجا به ترتیبِ منطقیِ خواندن می‌آید — یعنی وارونهٔ کدِ فیگما.
 */

/** یک بخشِ صفحه. فاصلهٔ درونی‌اش را خودش می‌گیرد. */
export function Section({
  id,
  gap = 44,
  tone = 'light',
  children,
}: {
  id: string
  /** فاصلهٔ بینِ بلوک‌های بخش، به پیکسلِ فیگما. */
  gap?: number
  /** بخشِ تیره پس‌زمینهٔ معکوس دارد و متنش روشن است. */
  tone?: 'light' | 'dark'
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={[
        'flex w-full flex-col items-start px-[clamp(20px,6.25vw,120px)] py-[clamp(48px,5vw,96px)]',
        tone === 'dark' ? 'bg-inverse text-on-inverse' : '',
      ].join(' ')}
      style={{ gap: `clamp(${Math.round(gap * 0.6)}px, ${gap / 19.2}vw, ${gap}px)` }}
    >
      {children}
    </section>
  )
}

/** شمارهٔ بخش و نامِ لاتینش. */
export function Eyebrow({
  number,
  label,
  tone = 'light',
}: {
  number: string
  label: string
  tone?: 'light' | 'dark'
}) {
  return (
    <div
      className="flex items-start gap-3 text-[13px] leading-none tracking-[1.6px] whitespace-nowrap"
      dir="ltr"
    >
      <span className={tone === 'dark' ? 'opacity-[0.66]' : 'text-ink-muted'}>
        {label}
      </span>
      <span className="font-semibold text-accent">{number}</span>
    </div>
  )
}

/** سرِ بخش: ابرو، عنوان، و یک بندِ توضیح. */
export function SectionHead({
  number,
  label,
  title,
  lede,
  tone = 'light',
}: {
  number: string
  label: string
  title: string
  lede?: ReactNode
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <header className="flex w-full flex-col items-start gap-4 text-start">
      <Eyebrow number={number} label={label} tone={tone} />

      <h2
        className={[
          'text-[clamp(26px,2.1vw,40px)] leading-[1.55] font-bold',
          dark ? '' : 'text-ink',
        ].join(' ')}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={[
            'max-w-[1180px] text-[clamp(16px,1vw,19px)] leading-[2.05]',
            dark ? 'opacity-80' : 'text-ink-secondary',
          ].join(' ')}
        >
          {lede}
        </p>
      )}
    </header>
  )
}

/** ردیفِ کارت‌ها. روی صفحهٔ کوچک ستونی می‌شود. */
export function CardRow({
  children,
  min = 260,
}: {
  children: ReactNode
  /** کمینهٔ عرضِ هر کارت پیش از شکستنِ ردیف. */
  min?: number
}) {
  return (
    <div
      className="grid w-full gap-[clamp(12px,1vw,20px)]"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))`,
      }}
    >
      {children}
    </div>
  )
}

/** کارتِ سطحِ روشن. */
export function Card({
  kicker,
  title,
  body,
  children,
}: {
  kicker?: string
  title?: ReactNode
  body?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-card bg-surface p-[clamp(16px,1.25vw,24px)] text-start">
      {kicker && (
        <p className="text-[13px] leading-[1.5] font-medium text-accent">
          {kicker}
        </p>
      )}
      {title && (
        <p className="text-[clamp(16px,1vw,19px)] leading-[1.65] font-bold text-ink">
          {title}
        </p>
      )}
      {body && (
        <p className="text-[clamp(13px,0.73vw,14px)] leading-[1.8] text-ink-muted">
          {body}
        </p>
      )}
      {children}
    </div>
  )
}

/** بلوکِ تیره — جایی که بخش حرفِ اصلی‌اش را می‌زند. */
export function Callout({
  kicker,
  children,
  note,
}: {
  /** رشتهٔ لاتینِ بالای بلوک. */
  kicker?: string
  children: ReactNode
  note?: ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-start gap-3 rounded-card bg-inverse p-[clamp(20px,1.67vw,32px)] text-start text-on-inverse">
      {kicker && (
        <p
          className="text-[12px] leading-none font-medium tracking-[1.6px] opacity-60"
          dir="ltr"
        >
          {kicker}
        </p>
      )}
      <p className="max-w-[1400px] text-[clamp(16px,1.04vw,20px)] leading-[2]">
        {children}
      </p>
      {note && (
        <p className="max-w-[1400px] text-[clamp(14px,0.83vw,16px)] leading-[1.9] opacity-[0.72]">
          {note}
        </p>
      )}
    </div>
  )
}

/** برچسبِ گردِ کوچک. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-pill border border-border bg-surface px-5 py-2.5 text-[15px] leading-[1.5] whitespace-nowrap text-ink-secondary">
      {children}
    </span>
  )
}

/** خطِ جداکننده. */
export function Divider() {
  return <div className="h-px w-full bg-border" />
}

/** سطرِ شماره‌دار — فهرستِ فرض‌ها و مانندش. */
export function NumberedItem({
  number,
  children,
}: {
  number: string
  children: ReactNode
}) {
  return (
    <li className="flex w-full items-start gap-4 rounded-card bg-surface p-5 text-start">
      <span className="shrink-0 text-[15px] leading-[1.8] font-bold whitespace-nowrap text-accent">
        {number}
      </span>
      <span className="min-w-0 flex-1 text-[clamp(14px,0.83vw,16px)] leading-[1.8] text-ink">
        {children}
      </span>
    </li>
  )
}

/** یک قلمِ برچسب‌دار داخلِ بلوکِ تیره. */
export function LabeledField({
  label,
  value,
}: {
  label: string
  value: ReactNode
}) {
  return (
    <div className="flex w-full flex-col items-start gap-1 text-start">
      <p className="text-[13px] leading-[1.6] opacity-55">{label}</p>
      <p className="w-full text-[clamp(15px,0.89vw,17px)] leading-[1.9]">
        {value}
      </p>
    </div>
  )
}

/** کارتِ یک مرحله از مسیر: شماره، عنوان، آنچه فهمیدیم، و نامِ لاتینِ روش. */
export function StepCard({
  step,
  title,
  body,
  method,
}: {
  step: string
  title: string
  body: string
  method: string
}) {
  return (
    <div className="flex h-full flex-col items-start gap-2.5 rounded-card bg-surface p-[clamp(16px,1.25vw,24px)] text-start">
      <p
        className="text-[12px] leading-none font-medium tracking-[1.2px] text-accent"
        dir="ltr"
      >
        {step}
      </p>
      <p className="text-[clamp(16px,0.94vw,18px)] leading-[1.6] font-bold text-ink">
        {title}
      </p>
      <p className="w-full flex-1 text-[14px] leading-[1.9] text-ink-muted">
        {body}
      </p>
      <p
        className="w-full text-[12px] leading-[1.3] font-medium text-ink-muted"
        dir="ltr"
      >
        {method}
      </p>
    </div>
  )
}

/**
 * سطرِ دو ستونه: عنوانِ برچسب‌دار در ابتدا، شرحش در ادامه.
 *
 * روی صفحهٔ باریک ستونی می‌شود تا عنوان بالای شرح بماند.
 */
export function SplitRow({
  tag,
  title,
  body,
}: {
  tag: string
  title: string
  body: string
}) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-card bg-surface p-6 text-start lg:flex-row lg:gap-7">
      <div className="flex flex-col items-start gap-1.5 lg:w-[520px] lg:shrink-0">
        <p
          className="text-[12px] leading-[1.3] font-medium tracking-[1.2px] whitespace-nowrap text-accent"
          dir="ltr"
        >
          {tag}
        </p>
        <p className="text-[clamp(16px,0.94vw,18px)] leading-[1.7] font-bold text-ink">
          {title}
        </p>
      </div>

      <p className="min-w-0 flex-1 text-[15px] leading-[1.95] text-ink-secondary">
        {body}
      </p>
    </div>
  )
}
