import { Section, SectionHead } from '../components/primitives'
import { lessons } from '../content/outcome'

/** بخش ۱۷ — چه یاد گرفتیم. بخشِ تیره. */
export function Lessons() {
  return (
    <Section id="lessons" gap={36} tone="dark">
      <SectionHead
        number={lessons.number}
        label={lessons.label}
        title={lessons.title}
        lede={lessons.lede}
        tone="dark"
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-2 xl:grid-cols-3">
        {lessons.items.map((item) => (
          <div
            key={item.tag}
            className="flex h-full flex-col items-start gap-2.5 rounded-card bg-page p-[clamp(20px,1.67vw,32px)] text-start"
          >
            <p
              className="w-full text-[12px] leading-[1.4] font-medium text-accent"
              dir="ltr"
            >
              {item.tag}
            </p>
            <p className="w-full text-[clamp(17px,1.04vw,20px)] leading-[1.7] font-bold text-ink">
              {item.title}
            </p>
            <p className="w-full text-[15px] leading-[1.95] text-ink-secondary">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
