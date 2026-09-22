import { useEffect, useState } from 'react'

import { BottomActions } from '../components/BottomActions'
import { BottomSheet } from '../components/BottomSheet'
import { consent } from '../content/consent'

/** باید با مدتِ حرکتِ `BottomSheet` یکی باشد. */
const EXIT_MS = 200

type ConsentProps = {
  /** همان چیزهایی که کاربر در ایستگاه ۱ گفته، به همان ترتیب. */
  kept: string[]
  onAgree: () => void
  onContinueWithout: () => void
  /** بستنِ شیت بدونِ انتخاب — برگشت به ایستگاه ۱. */
  onDismiss: () => void
}

/**
 * رضایت‌نامه — شیتی که روی ایستگاه ۱ از پایین بالا می‌آید.
 *
 * فریمِ فیگما پاسخ‌های خودِ کاربر را عیناً برمی‌گرداند، نه یک متنِ حقوقیِ
 * عمومی. نکته همین است: کاربر می‌بیند دقیقاً چه چیزی قرار است نگه داشته شود.
 * پس فهرست از state می‌آید، نه از یک رشتهٔ ثابت.
 *
 * شیت بودنش از ارتفاعِ فریم درمی‌آید: ۴۰۲ از ۸۵۲، یعنی نیمهٔ پایینِ صفحه و
 * ایستگاه ۱ پشتش پیداست.
 */
export function Consent({
  kept,
  onAgree,
  onContinueWithout,
  onDismiss,
}: ConsentProps) {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  /** اول شیت پایین می‌رود، بعد کارِ بعدی انجام می‌شود. */
  function closeThen(action: () => void) {
    setShown(false)
    window.setTimeout(action, EXIT_MS)
  }

  return (
    <BottomSheet
      shown={shown}
      dismissLabel={consent.close}
      onDismiss={() => closeThen(onDismiss)}
    >
      <p className="type-caption-paragraph w-full text-start text-ink">
        {consent.statement}
        <br />
        {kept.join('، ')}
      </p>

      <BottomActions
        primaryLabel={consent.agree}
        onPrimary={() => closeThen(onAgree)}
        primaryDisabled={false}
        skipLabel={consent.without}
        onSkip={() => closeThen(onContinueWithout)}
      />
    </BottomSheet>
  )
}
