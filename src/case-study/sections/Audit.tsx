import { Section, SectionHead } from '../components/primitives'
import { audit } from '../content/audit'

/** یک سطرِ روبریک: نسبتِ شکست با رنگِ تأکید، از ابتدای نوار. */
function AuditRow({
  row,
  pass,
  fail,
  note,
}: {
  row: string
  pass: number
  fail: number
  note: string
}) {
  const total = pass + fail
  // وقتی هیچ شکستی نیست، یک باریکه می‌ماند تا نوار خالی به‌نظر نرسد —
  // همان کاری که در فریمِ فیگما هم شده.
  const failPercent = total === 0 ? 0 : Math.max((fail / total) * 100, 1.25)

  return (
    <div className="flex w-full flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-4">
      <p className="text-[16px] leading-[1.75] text-ink lg:w-[300px] lg:shrink-0">
        {row}
      </p>

      <div className="flex shrink-0 items-center gap-2.5">
        <p
          className="text-[12px] leading-[1.3] font-semibold text-accent"
          dir="ltr"
        >
          {fail}
        </p>
        <div className="h-3.5 w-[clamp(140px,12.5vw,240px)] overflow-hidden rounded-pill bg-muted">
          <div className="h-full bg-accent" style={{ width: `${failPercent}%` }} />
        </div>
        <p className="text-[12px] leading-[1.3] text-ink-muted" dir="ltr">
          {pass}
        </p>
      </div>

      <p className="min-w-0 flex-1 text-start text-[15px] leading-[1.9] text-ink-secondary">
        {note}
      </p>
    </div>
  )
}

/** بخش ۱۴ — سنجشِ رابط، سطر به سطر. */
export function Audit() {
  return (
    <Section id="audit" gap={40}>
      <SectionHead
        number={audit.number}
        label={audit.label}
        title={audit.title}
        lede={audit.lede}
      />

      <div className="flex w-full flex-col items-start gap-4 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)]">
        <div className="hidden w-full flex-row gap-4 text-[13px] leading-[1.5] text-ink-muted lg:flex">
          <p className="w-[300px] shrink-0 text-start">{audit.columns.row}</p>
          <p className="w-[clamp(140px,12.5vw,240px)] shrink-0 text-center">
            {audit.columns.split}
          </p>
          <p className="min-w-0 flex-1 text-start">{audit.columns.note}</p>
        </div>

        {audit.rows.map((row) => (
          <AuditRow key={row.row} {...row} />
        ))}
      </div>

      <div className="grid w-full grid-cols-1 gap-[clamp(12px,1vw,20px)] md:grid-cols-2">
        <div className="flex h-full flex-col items-start gap-2.5 rounded-card bg-muted p-[clamp(20px,1.67vw,32px)] text-start">
          <p className="w-full text-[clamp(16px,1vw,19px)] leading-[1.65] font-bold text-ink">
            {audit.changed.title}
          </p>
          <p className="w-full text-[15px] leading-[1.95] text-ink-secondary">
            {audit.changed.body}
          </p>
        </div>

        <div className="flex h-full flex-col items-start gap-2.5 rounded-card bg-surface p-[clamp(20px,1.67vw,32px)] text-start">
          <p className="w-full text-[clamp(16px,1vw,19px)] leading-[1.65] font-bold text-ink">
            {audit.kept.title}
          </p>
          <p className="w-full text-[15px] leading-[1.95] text-ink-secondary">
            {audit.kept.body}
          </p>
        </div>
      </div>
    </Section>
  )
}
