import { Section, SectionHead } from '../components/primitives'
import { synthesis } from '../content/synthesis'

/** یک تم و تعدادِ منبعی که پشتش است. */
function ThemeBar({ sources, text }: { sources: number; text: string }) {
  const percent = (sources / synthesis.maxSources) * 100

  return (
    <div className="flex w-full items-center gap-4">
      <p className="min-w-0 flex-1 text-end text-[clamp(14px,0.83vw,16px)] leading-[1.7] text-ink">
        {text}
      </p>

      <div className="h-2.5 w-[clamp(100px,15.6vw,300px)] shrink-0 overflow-hidden rounded-pill bg-muted">
        <div
          className="h-full rounded-pill bg-accent"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p
        className="shrink-0 text-[14px] leading-[1.3] font-semibold text-ink-muted"
        dir="ltr"
      >
        {sources}
      </p>
    </div>
  )
}

/** بخش ۰۴ — چه چیزی در داده بود. */
export function Synthesis() {
  return (
    <Section id="synthesis" gap={40}>
      <SectionHead
        number={synthesis.number}
        label={synthesis.label}
        title={synthesis.title}
        lede={synthesis.lede}
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] lg:grid-cols-[1fr_544px]">
        <div className="flex flex-col items-end gap-[18px] rounded-card bg-surface p-[clamp(20px,1.67vw,32px)]">
          <p
            className="text-[12px] leading-none font-medium tracking-[1.6px] text-ink-muted"
            dir="ltr"
          >
            {synthesis.chartKicker}
          </p>

          {synthesis.themes.map((theme) => (
            <ThemeBar key={theme.text} {...theme} />
          ))}
        </div>

        <div className="flex flex-col gap-[clamp(12px,1vw,20px)] text-end">
          <blockquote className="flex flex-col items-end gap-3.5 rounded-card bg-inverse p-[clamp(20px,1.67vw,32px)] text-on-inverse">
            <p className="text-[clamp(17px,1.09vw,21px)] leading-[1.95]">
              {synthesis.quote.text}
            </p>
            <footer className="text-[13px] leading-[1.6] opacity-60">
              {synthesis.quote.source}
            </footer>
          </blockquote>

          <div className="flex flex-col items-end gap-2.5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)]">
            <p className="text-[clamp(15px,0.89vw,17px)] leading-[1.65] font-bold text-ink">
              {synthesis.compare.title}
            </p>

            <div className="flex w-full items-start gap-2.5">
              <p className="min-w-0 flex-1 text-[clamp(14px,0.83vw,16px)] leading-[1.75] text-ink-muted">
                {synthesis.compare.rejected}
              </p>
              <span className="shrink-0 text-[15px] text-ink-muted">✕</span>
            </div>

            <div className="flex w-full items-start gap-2.5">
              <p className="min-w-0 flex-1 text-[clamp(14px,0.83vw,16px)] leading-[1.75] text-ink">
                {synthesis.compare.accepted}
              </p>
              <span className="shrink-0 text-[15px] text-accent">✓</span>
            </div>

            <p className="text-[14px] leading-[1.9] text-ink-muted">
              {synthesis.compare.anchor}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
