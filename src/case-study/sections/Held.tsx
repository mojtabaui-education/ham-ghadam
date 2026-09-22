import { Section, SectionHead } from '../components/primitives'
import { held } from '../content/held'

/** بخش ۱۵ — چهار ردی که دانسته سرِ جایش ماند. */
export function Held() {
  return (
    <Section id="held" gap={40}>
      <SectionHead
        number={held.number}
        label={held.label}
        title={held.title}
        lede={held.lede}
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-2">
        {held.items.map((item) => {
          const dark = item.tone === 'dark'
          return (
            <div
              key={item.tag}
              className={[
                'flex h-full flex-col items-start gap-3 rounded-card p-[clamp(20px,1.67vw,32px)] text-start',
                dark ? 'bg-inverse text-on-inverse' : 'bg-surface',
              ].join(' ')}
            >
              <p
                className={[
                  'w-full text-[12px] leading-[1.4] font-medium',
                  dark ? 'opacity-60' : 'text-accent',
                ].join(' ')}
                dir="ltr"
              >
                {item.tag}
              </p>
              <p
                className={[
                  'w-full text-[clamp(17px,1.09vw,21px)] leading-[1.65] font-bold',
                  dark ? '' : 'text-ink',
                ].join(' ')}
              >
                {item.title}
              </p>

              {(
                [
                  [held.labels.model, item.model],
                  [held.labels.human, item.human],
                  [held.labels.cost, item.cost],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="flex w-full flex-col items-start gap-0.5">
                  <p
                    className={[
                      'text-[12px] leading-[1.6]',
                      dark ? 'opacity-55' : 'text-ink-muted',
                    ].join(' ')}
                  >
                    {label}
                  </p>
                  <p
                    className={[
                      'w-full text-[15px] leading-[1.9]',
                      dark ? 'opacity-85' : 'text-ink-secondary',
                    ].join(' ')}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
