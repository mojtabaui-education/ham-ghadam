import { BottomActions } from '../components/BottomActions'
import { NavRow } from '../components/NavRow'
import { consent } from '../content/consent'

type ConsentProps = {
  /** همان چیزهایی که کاربر در ایستگاه ۱ گفته، به همان ترتیب. */
  kept: string[]
  onAgree: () => void
  onContinueWithout: () => void
  onClose: () => void
}

/**
 * رضایت‌نامه — بینِ ایستگاه ۱ و ۲.
 *
 * فریمِ فیگما پاسخ‌های خودِ کاربر را عیناً برمی‌گرداند، نه یک متنِ حقوقیِ
 * عمومی. نکته همین است: کاربر می‌بیند دقیقاً چه چیزی قرار است نگه داشته شود.
 * پس فهرست از state می‌آید، نه از یک رشتهٔ ثابت.
 */
export function Consent({
  kept,
  onAgree,
  onContinueWithout,
  onClose,
}: ConsentProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col bg-page px-6 pt-8 pb-8">
      <div className="flex flex-col gap-8">
        <NavRow icon="close" actionLabel={consent.close} onAction={onClose} />

        <p className="type-caption-paragraph w-full text-start text-ink">
          {consent.statement}
          <br />
          {kept.join('، ')}
        </p>
      </div>

      <div className="mt-auto w-full pt-18">
        <BottomActions
          primaryLabel={consent.agree}
          onPrimary={onAgree}
          primaryDisabled={false}
          skipLabel={consent.without}
          onSkip={onContinueWithout}
        />
      </div>
    </div>
  )
}
