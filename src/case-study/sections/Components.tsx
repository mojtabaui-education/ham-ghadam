import type { ReactNode } from 'react'

import chevronRight from '../../assets/icons/chevron-right.svg'
import closeIcon from '../../assets/icons/close.svg'
import logo from '../../assets/icons/logo.svg'
import { BottomActions } from '../../components/BottomActions'
import { Chip } from '../../components/Chip'
import { FreeTextInput } from '../../components/FreeTextInput'
import { NavRow } from '../../components/NavRow'
import { Progress } from '../../components/Progress'
import { QuestionHeader } from '../../components/QuestionHeader'
import { ResultCard } from '../../components/ResultCard'
import { SkeletonCard } from '../../components/SkeletonCard'
import { Tag } from '../../components/Tag'
import { therapists } from '../../content/therapists'
import { Section, SectionHead } from '../components/primitives'
import { components } from '../content/components'

const noop = () => {}

/** یک خانهٔ ویترین: نامِ کامپوننت، کارش، و خودش. */
function Specimen({
  name,
  note,
  children,
}: {
  name: string
  note: string
  children: ReactNode
}) {
  return (
    <div className="flex h-full flex-col items-start gap-3 rounded-card bg-surface p-6 text-start">
      <p className="w-full text-[12px] leading-[1.4] font-medium text-accent" dir="ltr">
        {name}
      </p>
      <p className="w-full text-[13px] leading-[1.8] text-ink-muted">{note}</p>
      <div className="w-full max-w-[345px] self-start pt-2">{children}</div>
    </div>
  )
}

/** دکمه‌های کارِ اصلی، در سه حالتی که در فریم‌ها دیده می‌شوند. */
function PrimaryButton({ state }: { state: 'active' | 'disabled' | 'outline' }) {
  const skin = {
    active: 'bg-inverse text-on-inverse',
    disabled: 'bg-muted text-ink-muted',
    outline: 'border border-ink text-ink',
  }[state]

  return (
    <div
      className={`type-button flex h-12 w-full items-center justify-center rounded-control px-6 ${skin}`}
    >
      دیدن زمان‌های آزاد
    </div>
  )
}

/**
 * بخش ۱۱ — پانزده کامپوننت، و حالت‌هایشان.
 *
 * فریمِ فیگما می‌گوید «نمونه‌های زیر خودِ کامپوننت‌های همین فایل‌اند، نه
 * تصویرشان». اینجا هم همان: کامپوننت‌ها مستقیم از `src/components` می‌آیند،
 * پس هر تغییری در اپ همین‌جا هم دیده می‌شود و ویترین کهنه نمی‌شود.
 */
export function Components() {
  const c = components

  return (
    <Section id="components" gap={20}>
      <SectionHead
        number={c.number}
        label={c.label}
        title={c.title}
        lede={c.lede}
      />

      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <Specimen name="Logo" note={c.notes.logo}>
          <img src={logo} alt="" className="size-12" />
        </Specimen>

        <Specimen name="icon/close" note={c.notes.close}>
          <img src={closeIcon} alt="" className="size-6" />
        </Specimen>

        <Specimen name="icon/chevron-right" note={c.notes.chevron}>
          <img src={chevronRight} alt="" className="size-6" />
        </Specimen>

        <Specimen name="chip" note={c.notes.chip}>
          <div className="flex justify-start">
            <Chip label="عصرها" onDismiss={noop} />
          </div>
        </Specimen>

        <Specimen name="progress" note={c.notes.progress}>
          <Progress step={1} total={2} caption="دو پرسش، بعد فهرست." />
        </Specimen>

        <Specimen name="nav-row · icon=close" note={c.notes.navClose}>
          <NavRow icon="close" actionLabel="بستنِ مسیر" onAction={noop} />
        </Specimen>

        <Specimen name="nav-row · icon=back" note={c.notes.navBack}>
          <NavRow icon="back" actionLabel="برگشتن" onAction={noop} />
        </Specimen>

        <Specimen name="card-field" note={c.notes.cardField}>
          <div className="flex w-[145px] flex-col gap-1 text-start">
            <p className="type-caption text-ink-muted">مدت جلسه</p>
            <p className="type-body text-ink-secondary">۴۵ دقیقه</p>
          </div>
        </Specimen>

        <Specimen name="tag · state=default" note={c.notes.tagDefault}>
          <Tag label="🌙  شب‌ها خوابم نمی‌برد" selected={false} onToggle={noop} />
        </Specimen>

        <Specimen name="tag · state=selected" note={c.notes.tagSelected}>
          <Tag label="🌙  شب‌ها خوابم نمی‌برد" selected onToggle={noop} />
        </Specimen>

        <Specimen name="question-header · Subtitle=True" note={c.notes.headerTrue}>
          <QuestionHeader
            title="این روزها بیشتر درگیر چه چیزی هستید؟"
            subtitle="هر مورد یا مواردی که به حال روزهایتان نزدیکتر است."
          />
        </Specimen>

        <Specimen name="question-header · Subtitle=False" note={c.notes.headerFalse}>
          <QuestionHeader title="چه زمانی برایتان مناسب است؟" />
        </Specimen>

        <Specimen name="text-input · state=empty" note={c.notes.inputEmpty}>
          <FreeTextInput
            value=""
            placeholder="✏️  با واژه‌های خودتان بنویسید"
            onChange={noop}
            onCommit={noop}
          />
        </Specimen>

        {/* حالتِ فوکوس با :focus واقعی ساخته نمی‌شود چون کسی اینجا تایپ
            نمی‌کند؛ همان یک‌پیکسلِ طرح مستقیم روی ورودی گذاشته می‌شود. */}
        <Specimen name="text-input · state=focus" note={c.notes.inputFocus}>
          <div className="[&>input]:border-ink">
            <FreeTextInput
              value="احساس می‌کنم گیر"
              placeholder=""
              onChange={noop}
              onCommit={noop}
            />
          </div>
        </Specimen>

        <Specimen name="text-input · state=filled" note={c.notes.inputFilled}>
          <FreeTextInput
            value="احساس می‌کنم هیچ‌چیز پیش نمی‌رود"
            placeholder=""
            onChange={noop}
            onCommit={noop}
          />
        </Specimen>

        <Specimen name="btn-primary · state=active" note={c.notes.btnActive}>
          <PrimaryButton state="active" />
        </Specimen>

        <Specimen name="btn-primary · state=disabled" note={c.notes.btnDisabled}>
          <PrimaryButton state="disabled" />
        </Specimen>

        <Specimen name="btn-primary · state=outline" note={c.notes.btnOutline}>
          <PrimaryButton state="outline" />
        </Specimen>

        <Specimen name="btn-skip" note={c.notes.btnSkip}>
          <div className="type-button flex h-12 w-full items-center justify-center rounded-control text-ink-muted">
            رد می‌کنم
          </div>
        </Specimen>

        <Specimen name="bottom-actions" note={c.notes.bottomActions}>
          <BottomActions
            primaryLabel="ادامه"
            onPrimary={noop}
            primaryDisabled={false}
            skipLabel="رد می‌کنم"
            onSkip={noop}
          />
        </Specimen>

        <Specimen name="skeleton-card" note={c.notes.skeleton}>
          <SkeletonCard />
        </Specimen>

        <Specimen name="result-card" note={c.notes.resultCard}>
          <ResultCard
            therapist={therapists[0]}
            actionLabel="دیدن زمان‌های آزاد"
            onAction={noop}
          />
        </Specimen>
      </div>

      <div className="flex w-full flex-col items-start gap-2.5 rounded-card bg-muted p-[clamp(20px,1.67vw,32px)] text-start">
        <p className="text-[clamp(16px,1vw,19px)] leading-[1.6] font-bold text-ink">
          {c.gap.title}
        </p>
        <p className="max-w-[1400px] text-[clamp(14px,0.83vw,16px)] leading-[1.9] text-ink-secondary">
          {c.gap.body}
        </p>
      </div>
    </Section>
  )
}
