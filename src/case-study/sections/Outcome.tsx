import { Section, SectionHead } from '../components/primitives'
import { outcome } from '../content/outcome'

/** بخش ۱۶ — آخرش چه شد. */
export function Outcome() {
  return (
    <Section id="outcome" gap={40}>
      <SectionHead
        number={outcome.number}
        label={outcome.label}
        title={outcome.title}
        lede={outcome.lede}
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] sm:grid-cols-2 xl:grid-cols-4">
        {outcome.stats.map((stat) => {
          const dark = stat.tone === 'dark'
          return (
            <div
              key={stat.latin}
              className={[
                'flex h-full flex-col items-end gap-1.5 rounded-card p-[clamp(20px,1.67vw,32px)] text-end',
                dark ? 'bg-inverse text-on-inverse' : 'bg-surface',
              ].join(' ')}
            >
              <p
                className={[
                  'w-full text-[clamp(34px,2.5vw,48px)] leading-[1.3] font-bold',
                  dark ? '' : 'text-accent',
                ].join(' ')}
              >
                {stat.value}
              </p>
              <p
                className={[
                  'w-full text-[clamp(16px,0.94vw,18px)] leading-[1.6] font-bold',
                  dark ? '' : 'text-ink',
                ].join(' ')}
              >
                {stat.title}
              </p>
              <p
                className={[
                  'w-full text-[12px] leading-[1.5] font-medium tracking-[1.4px]',
                  dark ? 'opacity-55' : 'text-ink-muted',
                ].join(' ')}
                dir="ltr"
              >
                {stat.latin}
              </p>
              <p
                className={[
                  'w-full text-[14px] leading-[1.7]',
                  dark ? 'opacity-80' : 'text-ink-secondary',
                ].join(' ')}
              >
                {stat.which}
              </p>
            </div>
          )
        })}
      </div>

      <div className="flex w-full flex-col items-end gap-3 rounded-card bg-muted p-[clamp(20px,1.88vw,36px)] text-end">
        <p className="text-[clamp(20px,1.35vw,26px)] leading-[1.7] font-bold text-ink">
          {outcome.core.title}
        </p>
        <p className="max-w-[1400px] text-[clamp(15px,0.94vw,18px)] leading-[2] text-ink-secondary">
          {outcome.core.body}
        </p>
      </div>
    </Section>
  )
}
