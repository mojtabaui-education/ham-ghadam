import {
  LabeledField,
  NumberedItem,
  Section,
  SectionHead,
} from '../components/primitives'
import { assumptions } from '../content/assumptions'

/** بخش ۰۲ — چه چیزهایی را باور کرده بودیم. */
export function Assumptions() {
  return (
    <Section id="assumptions" gap={40}>
      <SectionHead
        number={assumptions.number}
        label={assumptions.label}
        title={assumptions.title}
        lede={assumptions.lede}
      />

      {/* در فیگما دو ستونِ پنج‌تایی است؛ اینجا ستون‌بندیِ خودکار تا روی
          صفحهٔ باریک به یک ستون برسد و ترتیبِ شماره‌ها نشکند. */}
      <ul className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
        {assumptions.items.map((item) => (
          <NumberedItem key={item.number} number={item.number}>
            {item.text}
          </NumberedItem>
        ))}
      </ul>

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] lg:grid-cols-2">
        <div className="flex flex-col items-start gap-3.5 rounded-card bg-inverse p-[clamp(20px,1.67vw,32px)] text-on-inverse">
          <p
            className="text-[12px] leading-none font-medium tracking-[1.6px] opacity-60"
            dir="ltr"
          >
            {assumptions.specimen.kicker}
          </p>
          {assumptions.specimen.fields.map((field) => (
            <LabeledField
              key={field.label}
              label={field.label}
              value={field.value}
            />
          ))}
        </div>

        <div className="flex flex-col items-start gap-2.5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)] text-start">
          <p className="text-[clamp(16px,1vw,19px)] leading-[1.6] font-bold text-ink">
            {assumptions.aside.title}
          </p>
          <p className="w-full text-[clamp(14px,0.83vw,16px)] leading-[1.95] text-ink-secondary">
            {assumptions.aside.body}
          </p>
        </div>
      </div>
    </Section>
  )
}
