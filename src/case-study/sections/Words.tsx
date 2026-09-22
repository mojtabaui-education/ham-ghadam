import { Section, SectionHead } from '../components/primitives'
import { words } from '../content/words'

/** بخش ۱۳ — رشته‌ها، و آن‌ها که رد شدند. */
export function Words() {
  return (
    <Section id="words" gap={40}>
      <SectionHead
        number={words.number}
        label={words.label}
        title={words.title}
        lede={words.lede}
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] lg:grid-cols-2">
        <div className="flex h-full flex-col items-end gap-3.5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)]">
          <p className="text-[12px] leading-[1.3] font-medium tracking-[1.4px] text-ink-muted">
            {words.keptKicker}
          </p>

          {words.kept.map((row) => (
            <div key={row.key} className="flex w-full items-start gap-3.5">
              <p className="min-w-0 flex-1 text-end text-[16px] leading-[1.8] text-ink">
                {row.text}
              </p>
              <p
                className="w-[140px] shrink-0 text-[12px] leading-[1.9] text-accent"
                dir="ltr"
              >
                {row.key}
              </p>
              <p className="w-7 shrink-0 text-[12px] leading-[1.7] font-medium text-ink-muted">
                {row.count}
              </p>
            </div>
          ))}

          <div className="flex w-full items-start gap-3.5 pt-3">
            <p className="min-w-0 flex-1 text-end text-[15px] leading-[1.85] text-ink-muted">
              {words.empty.text}
            </p>
            <p
              className="w-[170px] shrink-0 text-[12px] leading-[1.9] text-accent"
              dir="ltr"
            >
              {words.empty.key}
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col items-end gap-3.5 rounded-card bg-inverse p-[clamp(20px,1.67vw,32px)] text-end text-on-inverse">
          <p className="text-[12px] leading-[1.3] font-medium tracking-[1.4px] opacity-60">
            {words.rejectedKicker}
          </p>

          {words.rejected.map((row) => (
            <div key={row.text} className="flex w-full flex-col items-end gap-0.5">
              <p className="w-full text-[16px] leading-[1.8] opacity-85">
                {row.text}
              </p>
              <p className="w-full text-[13px] leading-[1.7] text-accent">
                {row.why}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
