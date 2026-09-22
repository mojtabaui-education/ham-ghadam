import type { ReactNode } from 'react'

import { NavRow } from '../components/NavRow'
import { StateIllustration } from '../components/StateIllustration'

type StateScreenProps = {
  /** نشانهٔ وسطِ تصویر: ذره‌بین، ابر یا دفتر. */
  glyph: ReactNode
  /** چه شد. یک جمله. */
  echo: string
  /** چرا — فقط اگر بدانیم. */
  cause?: string
  /** دقیقاً یک کارِ بعدی، یا هیچ‌کدام. */
  action?: { label: string; onAction: () => void }
  nav?: {
    icon: 'close' | 'back'
    label: string
    onAction: () => void
  }
}

/**
 * صفحهٔ حالت — بدون‌نتیجه، آفلاین و خروج.
 *
 * هر سه در فیگما یک ساختار دارند: سطرِ بالا، تصویرِ ۱۶۰ در وسط، یک یا دو خط
 * متن زیرش، و یک کارِ پایین که گاهی نیست (صفحهٔ خروج دکمه ندارد).
 *
 * قاعدهٔ `kit/voice.md` برای این صفحه‌ها: چه شد (بدونِ واژهٔ «خطا») — چرا،
 * اگر می‌دانیم — و دقیقاً یک کارِ بعدی، نه چهارتا.
 */
export function StateScreen({
  glyph,
  echo,
  cause,
  action,
  nav,
}: StateScreenProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col bg-page px-6 pt-8 pb-8">
      {nav ? (
        <NavRow
          icon={nav.icon}
          actionLabel={nav.label}
          onAction={nav.onAction}
        />
      ) : (
        <div className="h-12 shrink-0" />
      )}

      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-14">
        <StateIllustration>{glyph}</StateIllustration>

        <div className="flex w-full flex-col gap-2 text-center">
          <p className="type-question w-full text-ink">{echo}</p>
          {cause && (
            <p className="type-caption-paragraph w-full text-ink-muted">
              {cause}
            </p>
          )}
        </div>
      </div>

      {action ? (
        <button
          type="button"
          onClick={action.onAction}
          className="type-button flex h-12 w-full shrink-0 items-center justify-center rounded-control bg-inverse px-6 text-on-inverse"
        >
          {action.label}
        </button>
      ) : (
        // صفحهٔ خروج دکمه ندارد؛ جایش خالی می‌ماند تا تصویر وسط بماند.
        <div className="h-12 shrink-0" />
      )}
    </div>
  )
}
