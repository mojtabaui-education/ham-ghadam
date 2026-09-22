import { Section, SectionHead, StepCard } from '../components/primitives'
import { process } from '../content/process'

/** بخش ۰۳ — مسیری که طی شد. */
export function Process() {
  return (
    <Section id="process" gap={40}>
      <SectionHead
        number={process.number}
        label={process.label}
        title={process.title}
        lede={process.lede}
      />

      {/* در فیگما دو ردیفِ پنج‌تایی؛ اینجا همان پنج ستون تا جا دارد. */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {process.steps.map((step) => (
          <StepCard key={step.step} {...step} />
        ))}
      </div>
    </Section>
  )
}
