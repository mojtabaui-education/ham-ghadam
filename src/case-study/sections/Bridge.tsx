import { Section, SectionHead } from '../components/primitives'
import { bridge } from '../content/bridge'

/**
 * بخش ۰۸ — هر تصمیم کجای رابط نشست.
 *
 * تنها بخشِ تیرهٔ صفحه. جدولِ سه‌ستونه روی صفحهٔ باریک ستونی می‌شود، چون
 * جدولِ افقی در عرضِ موبایل خوانده نمی‌شود.
 */
export function Bridge() {
  return (
    <Section id="bridge" gap={40} tone="dark">
      <SectionHead
        number={bridge.number}
        label={bridge.label}
        title={bridge.title}
        lede={bridge.lede}
        tone="dark"
      />

      <div className="flex w-full flex-col gap-0.5">
        <div className="hidden w-full gap-6 rounded-control bg-page px-7 py-3.5 text-[13px] leading-[1.5] text-ink-muted lg:flex">
          <p className="w-[430px] shrink-0 text-start">
            {bridge.columns.decision}
          </p>
          <p className="min-w-0 flex-1 text-start">{bridge.columns.where}</p>
          <p className="w-[300px] shrink-0">{bridge.columns.technical}</p>
        </div>

        {bridge.rows.map((row) => (
          <div
            key={row.technical}
            className="flex w-full flex-col gap-3 rounded-control bg-surface px-7 py-[22px] text-start lg:flex-row lg:gap-6"
          >
            <p className="text-[clamp(15px,0.89vw,17px)] leading-[1.75] font-bold text-ink lg:w-[430px] lg:shrink-0">
              {row.decision}
            </p>
            <p className="min-w-0 flex-1 text-[clamp(14px,0.83vw,16px)] leading-[1.9] text-ink-secondary">
              {row.where}
            </p>
            <p
              className="text-[12px] leading-[1.65] text-ink-muted lg:w-[300px] lg:shrink-0"
              dir="ltr"
            >
              {row.technical}
            </p>
          </div>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-2">
        {bridge.flags.map((flag) => (
          <div
            key={flag.title}
            className="flex h-full flex-col items-start gap-2 rounded-card bg-page p-7 text-start"
          >
            <p className="w-full text-[clamp(15px,0.89vw,17px)] leading-[1.7] font-bold text-ink">
              {flag.title}
            </p>
            <p className="w-full text-[15px] leading-[1.9] text-ink-secondary">
              {flag.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
