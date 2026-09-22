import { Section, SectionHead } from '../components/primitives'
import { persona } from '../content/persona'

/** بخش ۰۵ — دو نفر، و تنها تفاوتی که در داده دو نقطه داشت. */
export function Persona() {
  return (
    <Section id="persona" gap={40}>
      <SectionHead
        number={persona.number}
        label={persona.label}
        title={persona.title}
        lede={persona.lede}
      />

      <div className="flex w-full flex-col items-center gap-1.5 rounded-card bg-inverse p-7 text-center text-on-inverse">
        <p className="text-[clamp(19px,1.25vw,24px)] leading-[1.6] font-bold">
          {persona.axis.title}
        </p>
        <p
          className="text-[12px] leading-[1.3] font-medium tracking-[1.6px] opacity-60"
          dir="ltr"
        >
          {persona.axis.kicker}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-2">
        {persona.pair.map((side) => (
          <div
            key={side.kicker}
            className="flex h-full flex-col items-end gap-3 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)] text-end"
          >
            <p
              className="w-full text-[12px] leading-[1.3] font-semibold tracking-[2px] text-accent"
              dir="ltr"
            >
              {side.kicker}
            </p>
            <p className="w-full text-[clamp(20px,1.35vw,26px)] leading-[1.6] font-bold text-ink">
              {side.title}
            </p>
            <p className="w-full text-[clamp(15px,0.89vw,17px)] leading-[1.85] text-ink-secondary">
              {side.result}
            </p>
            <p className="w-full text-[14px] leading-[1.9] text-ink-muted">
              {side.anchor}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-end gap-2.5 rounded-card bg-muted p-7 text-end">
        <p
          className="text-[12px] leading-[1.3] font-medium tracking-[1.6px] text-ink-secondary"
          dir="ltr"
        >
          {persona.shared.kicker}
        </p>
        <p className="max-w-[1400px] text-[clamp(15px,0.94vw,18px)] leading-[1.9] text-ink">
          {persona.shared.body}
        </p>
        <p className="max-w-[1400px] text-[14px] leading-[1.9] text-ink-secondary">
          {persona.shared.note}
        </p>
      </div>
    </Section>
  )
}
