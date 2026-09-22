import logo from '../../assets/icons/logo.svg'
import { Section, SectionHead } from '../components/primitives'
import { designLanguage as dl } from '../content/designLanguage'

/**
 * بخش ۱۰ — زبانِ بصری.
 *
 * نقطهٔ رنگیِ کنارِ هر نقش در فیگما یک SVG جداست. اینجا با یک div و رنگِ
 * همان نقش درمی‌آید: همان چیزی که نشان می‌دهد، بدونِ دوازده فایلِ اضافه.
 */
export function DesignLanguage() {
  return (
    <Section id="design-language" gap={40}>
      <SectionHead
        number={dl.number}
        label={dl.label}
        title={dl.title}
        lede={dl.lede}
      />

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] lg:grid-cols-2">
        <div className="flex h-full flex-col items-start gap-5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)] text-start">
          <div className="flex items-center gap-8">
            <img src={logo} alt="" className="size-[88px]" />
            <img src={logo} alt="" className="size-14" />
            <img src={logo} alt="" className="size-7" />
          </div>
          <p className="w-full text-[clamp(16px,1vw,19px)] leading-[1.6] font-bold text-ink">
            {dl.logo.title}
          </p>
          <p className="w-full text-[15px] leading-[1.95] text-ink-secondary">
            {dl.logo.body}
          </p>
        </div>

        <div className="flex h-full flex-col items-start gap-2.5 rounded-card bg-inverse p-[clamp(20px,1.67vw,32px)] text-start text-on-inverse">
          <p className="w-full text-[clamp(16px,1vw,19px)] leading-[1.65] font-bold">
            {dl.contrast.title}
          </p>
          <p className="w-full text-[15px] leading-[1.95] opacity-80">
            {dl.contrast.body}
          </p>
          <p className="w-full text-[13px] leading-[1.7] opacity-55">
            {dl.contrast.note}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-[22px] rounded-card bg-surface p-[clamp(20px,1.67vw,32px)]">
        <p
          className="text-[12px] leading-[1.3] font-medium tracking-[1.6px] text-ink-muted"
          dir="ltr"
        >
          {dl.colour.kicker}
        </p>

        <div className="flex w-full flex-wrap justify-start gap-3">
          {dl.colour.primitives.map((swatch) => (
            <div
              key={swatch.name}
              className="flex flex-col items-start gap-2"
              dir="ltr"
            >
              <div
                className="h-[72px] w-32 rounded-control border border-border"
                style={{ backgroundColor: swatch.hex }}
              />
              <p className="text-[12px] leading-[1.3] font-medium text-ink">
                {swatch.name}
              </p>
              <p className="text-[12px] leading-[1.3] text-ink-muted">
                {swatch.hex}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-wrap justify-start gap-x-3 gap-y-2.5">
          {dl.colour.roles.map((role) => (
            <div
              key={role.role}
              className="flex items-center gap-2 rounded-pill bg-page px-3 py-2"
              dir="ltr"
            >
              <span
                className="size-3.5 shrink-0 rounded-pill border border-border"
                style={{ backgroundColor: role.hex }}
              />
              <span className="text-[12px] leading-[1.3] font-medium text-ink">
                {role.role}
              </span>
              <span className="text-[12px] leading-[1.3] text-ink-muted">←</span>
              <span className="text-[12px] leading-[1.3] text-ink-muted">
                {role.from}
              </span>
            </div>
          ))}
        </div>

        <p className="max-w-[1400px] text-start text-[14px] leading-[1.9] text-ink-muted">
          {dl.colour.note}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] lg:grid-cols-[600px_1fr]">
        <div className="flex h-full flex-col items-start gap-[18px] rounded-card bg-surface p-[clamp(20px,1.67vw,32px)]">
          <p
            className="text-[12px] leading-[1.3] font-medium tracking-[1.6px] text-ink-muted"
            dir="ltr"
          >
            {dl.geometry.kicker}
          </p>

          <div className="flex flex-wrap justify-start gap-4">
            {dl.geometry.radii.map((radius) => (
              <div key={radius.name} className="flex flex-col items-center gap-2">
                <div className={`h-14 w-[72px] bg-muted ${radius.className}`} />
                <p className="text-[12px] leading-[1.3] text-ink-muted" dir="ltr">
                  {radius.name}
                </p>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-wrap items-end justify-start gap-x-3 gap-y-2.5">
            {dl.geometry.spaces.map((space) => (
              <div key={space} className="flex flex-col items-center gap-1.5">
                <div
                  className="h-6 rounded-[2px] bg-accent"
                  style={{ width: space }}
                />
                <p className="text-[12px] leading-[1.3] text-ink-muted" dir="ltr">
                  {space}
                </p>
              </div>
            ))}
          </div>

          <p className="max-w-[520px] text-start text-[14px] leading-[1.9] text-ink-muted">
            {dl.geometry.note}
          </p>
        </div>

        <div className="flex h-full flex-col items-start gap-4 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)]">
          <p
            className="text-[12px] leading-[1.3] font-medium tracking-[1.6px] text-ink-muted"
            dir="ltr"
          >
            {dl.type.kicker}
          </p>

          {dl.type.styles.map((style) => (
            <div
              key={style.spec}
              className="flex w-full flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-4"
            >
              <p className={`min-w-0 flex-1 text-start text-ink ${style.className}`}>
                {style.sample}
              </p>
              <p
                className="text-[12px] leading-[1.3] whitespace-pre-wrap text-ink-muted sm:w-[200px] sm:shrink-0"
                dir="ltr"
              >
                {style.spec}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
