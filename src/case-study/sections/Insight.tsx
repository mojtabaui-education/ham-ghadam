import { Fragment } from 'react'

import { Section, SectionHead } from '../components/primitives'
import { insight } from '../content/insight'

/** بخش ۰۶ — قانونی که خودمان نوشته بودیم، با دادهٔ خودمان شکست. */
export function Insight() {
  return (
    <Section id="insight" gap={40}>
      <SectionHead
        number={insight.number}
        label={insight.label}
        title={insight.title}
        lede={insight.lede}
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-2">
        {insight.contradiction.map((side) => (
          <div
            key={side.kicker}
            className="flex h-full flex-col items-start gap-2.5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)] text-start"
          >
            <p className="w-full text-[12px] leading-[1.3] font-medium tracking-[1.4px] text-accent">
              {side.kicker}
            </p>
            <p className="w-full text-[clamp(17px,1.15vw,22px)] leading-[1.7] font-bold text-ink">
              {side.title}
            </p>
            <p className="w-full text-[clamp(14px,0.78vw,15px)] leading-[1.9] text-ink-muted">
              {side.note}
            </p>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col items-start gap-3 rounded-card bg-inverse p-[clamp(20px,1.88vw,36px)] text-start text-on-inverse">
        <p
          className="text-[12px] leading-[1.3] font-medium tracking-[1.6px] opacity-60"
          dir="ltr"
        >
          {insight.resolution.kicker}
        </p>
        <p className="max-w-[1400px] text-[clamp(18px,1.25vw,24px)] leading-[1.8]">
          {insight.resolution.body}
        </p>
        <p className="max-w-[1400px] text-[clamp(15px,0.89vw,17px)] leading-[2] opacity-80">
          {insight.resolution.note}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-2">
        <div className="flex h-full flex-col items-start gap-3.5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)] text-start">
          <p className="w-full text-[clamp(16px,1vw,19px)] leading-[1.6] font-bold text-ink">
            {insight.rule.title}
          </p>

          <div className="flex flex-wrap items-center justify-start gap-2.5">
            {insight.rule.conditions.map((condition, index) => (
              <Fragment key={condition}>
                {index > 0 && (
                  <span
                    className="rounded-pill bg-page px-3.5 py-2 text-[12px] leading-[1.5] font-medium whitespace-nowrap text-ink-muted"
                    dir="ltr"
                  >
                    AND
                  </span>
                )}
                <span className="rounded-pill bg-muted px-3.5 py-2 text-[15px] leading-[1.5] whitespace-nowrap text-ink">
                  {condition}
                </span>
              </Fragment>
            ))}
          </div>

          <p className="w-full text-[clamp(14px,0.78vw,15px)] leading-[1.85] text-ink-secondary">
            {insight.rule.note}
          </p>
        </div>

        <div className="flex h-full flex-col items-start gap-2.5 rounded-card bg-muted p-[clamp(20px,1.67vw,32px)] text-start">
          <p
            className="w-full text-[12px] leading-[1.3] font-medium tracking-[1.4px] text-ink-secondary"
            dir="ltr"
          >
            {insight.veto.kicker}
          </p>
          <p className="w-full text-[clamp(16px,1vw,19px)] leading-[1.65] font-bold text-ink">
            {insight.veto.title}
          </p>
          <p className="w-full text-[clamp(14px,0.78vw,15px)] leading-[1.9] text-ink-secondary">
            {insight.veto.body}
          </p>
        </div>
      </div>
    </Section>
  )
}
