import { EmptyIllustration } from '../components/EmptyIllustration'
import { NavRow } from '../components/NavRow'

type EmptyStateProps = {
  /** چه شد. یک جمله. */
  echo: string
  /** چرا — فقط اگر بدانیم کدام قید باعثش شده. */
  cause?: string
  /** دقیقاً یک کارِ بعدی. */
  actionLabel: string
  onAction: () => void
  backLabel: string
  onBack: () => void
}

/**
 * صفحهٔ بدون‌نتیجه.
 *
 * ساختِ متن‌ها در `content/empty.ts` است، نه اینجا — چون قاعدهٔ لحن برای این
 * صفحه سه‌تکه است (چه شد، چرا، یک کارِ بعدی) و همان‌جا کنار هم می‌ماند.
 *
 * فریمِ فیگما دو واریانت دارد: با قیدِ مسبب و بدونِ آن. واریانتِ دوم فقط
 * سطرِ «چرا» را برمی‌دارد، پس اینجا `cause` اختیاری است.
 */
export function EmptyState({
  echo,
  cause,
  actionLabel,
  onAction,
  backLabel,
  onBack,
}: EmptyStateProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[393px] flex-col bg-page px-6 pt-8 pb-8">
      <NavRow icon="back" actionLabel={backLabel} onAction={onBack} />

      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-14">
        <EmptyIllustration />

        <div className="flex w-full flex-col gap-2 text-center">
          <p className="type-question w-full text-ink">{echo}</p>
          {cause && (
            <p className="type-caption-paragraph w-full text-ink-muted">
              {cause}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onAction}
        className="type-button flex h-12 w-full shrink-0 items-center justify-center rounded-control bg-inverse px-6 text-on-inverse"
      >
        {actionLabel}
      </button>
    </div>
  )
}
