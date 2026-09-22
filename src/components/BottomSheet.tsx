import type { ReactNode } from 'react'
import { useEffect } from 'react'

import closeIcon from '../assets/icons/close.svg'

type BottomSheetProps = {
  /** false یعنی شیت پایینِ قاب است؛ true بالا می‌آید. */
  shown: boolean
  /** متنِ خواندنیِ دکمهٔ بستن. */
  dismissLabel: string
  onDismiss: () => void
  children: ReactNode
}

/**
 * شیتِ پایین.
 *
 * ظاهرش از کامپوننتِ `bottom-sheet` همین فایلِ فیگما آمده: پس‌زمینهٔ سطح،
 * گوشه‌های بالا به اندازهٔ radius/card و پدینگِ ۲۴.
 *
 * حرکتِ باز و بسته شدن را والد نگه می‌دارد (`shown`)، چون بسته شدن باید تا
 * تمام شدنِ حرکت صبر کند و بعد کارِ بعدی را انجام بدهد.
 */
export function BottomSheet({
  shown,
  dismissLabel,
  onDismiss,
  children,
}: BottomSheetProps) {
  // تا وقتی شیت باز است، صفحهٔ زیرش نباید اسکرول شود.
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onDismiss()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onDismiss])

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <button
        type="button"
        aria-label={dismissLabel}
        onClick={onDismiss}
        className={[
          'absolute inset-0 bg-inverse/40 transition-opacity duration-200',
          'motion-reduce:transition-none',
          shown ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />

      <div
        role="dialog"
        aria-modal="true"
        className={[
          'relative mx-auto flex w-full max-w-[393px] flex-col gap-6',
          'rounded-t-card bg-surface p-6',
          'transition-transform duration-200 ease-out motion-reduce:transition-none',
          shown ? 'translate-y-0' : 'translate-y-full',
        ].join(' ')}
      >
        <div className="flex w-full items-center justify-start">
          <button
            type="button"
            onClick={onDismiss}
            aria-label={dismissLabel}
            className="-ms-3 flex size-12 shrink-0 items-center justify-center"
          >
            <img src={closeIcon} alt="" className="size-6" />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
