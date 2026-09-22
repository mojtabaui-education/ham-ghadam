import { Section, SectionHead } from '../components/primitives'
import { structure } from '../content/structure'

/** بخش ۰۹ — سه ایستگاه، و یک ثابت. */
export function Structure() {
  return (
    <Section id="structure" gap={40}>
      <SectionHead
        number={structure.number}
        label={structure.label}
        title={structure.title}
        lede={structure.lede}
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-3">
        {structure.stations.map((station) => (
          <div
            key={station.kicker}
            className="flex h-full flex-col items-end gap-2.5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)] text-end"
          >
            <p
              className="w-full text-[12px] leading-[1.3] font-semibold tracking-[1.6px] text-accent"
              dir="ltr"
            >
              {station.kicker}
            </p>
            <p className="w-full text-[clamp(19px,1.25vw,24px)] leading-[1.6] font-bold text-ink">
              {station.title}
            </p>
            <p className="w-full flex-1 text-[15px] leading-[2] text-ink-secondary">
              {station.parts}
            </p>
            <p className="w-full text-[13px] leading-[1.7] text-ink-muted">
              {station.states}
            </p>
          </div>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-2">
        <div className="flex h-full flex-col items-end gap-3 rounded-card bg-muted p-[clamp(20px,1.67vw,32px)] text-end">
          <p className="w-full text-[clamp(16px,1vw,19px)] leading-[1.6] font-bold text-ink">
            {structure.budget.title}
          </p>
          <p className="w-full text-[15px] leading-[1.95] text-ink-secondary">
            {structure.budget.body}
          </p>
        </div>

        <div className="flex h-full flex-col items-end gap-3 rounded-card bg-inverse p-[clamp(20px,1.67vw,32px)] text-end text-on-inverse">
          <p
            className="w-full text-[12px] leading-[1.3] font-medium tracking-[1.6px] opacity-60"
            dir="ltr"
          >
            {structure.constant.kicker}
          </p>
          <p className="w-full text-[clamp(16px,1vw,19px)] leading-[1.65] font-bold">
            {structure.constant.title}
          </p>
          <p className="w-full text-[15px] leading-[1.95] opacity-80">
            {structure.constant.body}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-end gap-3.5">
        <p className="text-[clamp(16px,1vw,19px)] leading-[1.6] font-bold text-ink">
          {structure.leftOut.title}
        </p>
        <div className="flex w-full flex-wrap justify-end gap-2.5">
          {structure.leftOut.items.map((item) => (
            <span
              key={item}
              className="rounded-pill border border-border bg-surface px-[18px] py-[9px] text-[14px] leading-[1.5] whitespace-nowrap text-ink-secondary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
