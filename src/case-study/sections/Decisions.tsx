import { Section, SectionHead, SplitRow } from '../components/primitives'
import { decisions } from '../content/decisions'

/** بخش ۰۷ — چه چیزی در محصول عوض شد. */
export function Decisions() {
  return (
    <Section id="decisions" gap={40}>
      <SectionHead
        number={decisions.number}
        label={decisions.label}
        title={decisions.title}
        lede={decisions.lede}
      />

      <div className="flex w-full flex-col gap-3">
        {decisions.rows.map((row) => (
          <SplitRow key={row.tag} {...row} />
        ))}
      </div>
    </Section>
  )
}
