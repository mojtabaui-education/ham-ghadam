import { Section, SectionHead } from '../components/primitives'
import { next } from '../content/outcome'

/** بخش ۱۸ — قدمِ بعدی، و پانوشتِ سند. */
export function Next() {
  return (
    <Section id="next" gap={40}>
      <SectionHead
        number={next.number}
        label={next.label}
        title={next.title}
        lede={next.lede}
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-3">
        {next.steps.map((step) => (
          <div
            key={step.rank}
            className="flex h-full flex-col items-end gap-2.5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)] text-end"
          >
            <p className="w-full text-[15px] leading-[1.5] font-bold text-accent">
              {step.rank}
            </p>
            <p className="w-full text-[clamp(17px,1.09vw,21px)] leading-[1.65] font-bold text-ink">
              {step.title}
            </p>
            <p className="w-full text-[15px] leading-[1.95] text-ink-secondary">
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-end gap-2.5 rounded-card bg-muted p-[clamp(20px,1.67vw,32px)] text-end">
        <p className="text-[clamp(16px,1vw,19px)] leading-[1.65] font-bold text-ink">
          {next.ui.title}
        </p>
        <p className="max-w-[1400px] text-[clamp(14px,0.83vw,16px)] leading-[1.95] text-ink-secondary">
          {next.ui.body}
        </p>
      </div>

      <footer className="flex w-full flex-col items-end gap-2.5 pt-9 text-end text-ink-muted">
        <p className="max-w-[1400px] text-[15px] leading-[1.95]">
          {next.footer.body}
        </p>
        <p className="text-[14px] leading-[1.7]">{next.footer.credit}</p>
      </footer>
    </Section>
  )
}
