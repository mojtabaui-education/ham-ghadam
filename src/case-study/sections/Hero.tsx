import logo from '../../assets/icons/logo.svg'
import { Card, CardRow, Divider, Pill } from '../components/primitives'
import { hero } from '../content/hero'

/** بخش ۰۰ — سرِ صفحه. */
export function Hero() {
  return (
    <section
      id="hero"
      className="flex w-full flex-col items-start gap-[clamp(18px,1.56vw,30px)] px-[clamp(20px,6.25vw,120px)] pt-[clamp(56px,7.8vw,150px)] pb-[clamp(56px,5.7vw,110px)] text-start"
    >
      <img src={logo} alt="هم‌قدم" className="size-[clamp(48px,3.75vw,72px)]" />

      <p className="text-[clamp(14px,0.83vw,16px)] leading-[1.5] font-medium text-accent">
        {hero.eyebrow}
      </p>

      <h1 className="text-[clamp(34px,3.96vw,76px)] leading-[1.35] font-bold text-ink">
        {hero.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>

      <p className="max-w-[1180px] text-[clamp(16px,1.15vw,22px)] leading-[1.95] text-ink-secondary">
        {hero.lede}
      </p>

      <div className="flex flex-wrap justify-start gap-3">
        {hero.meta.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>

      <Divider />

      <CardRow min={300}>
        {hero.toc.map((entry) => (
          <Card
            key={entry.range}
            title={entry.title}
            body={entry.items}
          >
            <p
              className="order-first text-[12px] leading-none font-medium tracking-[1.2px] text-accent"
              dir="ltr"
            >
              {entry.range}
            </p>
          </Card>
        ))}
      </CardRow>

      <p className="text-[clamp(13px,0.73vw,14px)] leading-[1.6] text-ink-muted">
        {hero.footer}
      </p>
    </section>
  )
}
