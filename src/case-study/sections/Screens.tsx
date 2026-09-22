import { Section, SectionHead } from '../components/primitives'
import { screens } from '../content/screens'

/**
 * بخش ۱۲ — بیست‌وچهار فریم، در نُه فلو.
 *
 * ردیفِ فریم‌های هر فلو یک تصویرِ صادرشده از فیگماست. روی صفحهٔ باریک
 * افقی اسکرول می‌شود تا کوچک نشود و فریم‌ها خوانا بمانند.
 */
export function Screens() {
  return (
    <Section id="screens" gap={40} tone="dark">
      <SectionHead
        number={screens.number}
        label={screens.label}
        title={screens.title}
        lede={screens.lede}
        tone="dark"
      />

      {screens.flows.map((flow) => (
        <article
          key={flow.tag}
          className="flex w-full flex-col items-end gap-6 border-t border-on-inverse/15 pt-6"
        >
          <div className="flex w-full flex-col items-end gap-1.5 text-end">
            <div className="flex flex-wrap items-center justify-end gap-3">
              <span
                className="text-[12px] leading-[1.3] font-semibold tracking-[1.4px] text-accent"
                dir="ltr"
              >
                {flow.tag}
              </span>
              <h3 className="text-[clamp(18px,1.15vw,22px)] leading-[1.6] font-bold">
                {flow.title}
              </h3>
              <span
                className="text-[12px] leading-[1.5] font-medium opacity-60"
                dir="ltr"
              >
                {flow.latin}
              </span>
            </div>
            <p className="max-w-[1200px] text-[15px] leading-[1.9] opacity-70">
              {flow.body}
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <img
              src={flow.image}
              alt={`فریم‌های ${flow.title}`}
              loading="lazy"
              className="h-auto w-full min-w-[900px]"
            />
          </div>
        </article>
      ))}
    </Section>
  )
}
