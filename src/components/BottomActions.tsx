type BottomActionsProps = {
  primaryLabel: string
  onPrimary: () => void
  primaryDisabled: boolean
  skipLabel: string
  onSkip: () => void
}

/**
 * کارِ اصلی و راهِ رد کردن.
 *
 * توضیحِ فیگما، سطر ۷ روبریک: «رد می‌کنم» هرگز بیش از یک لمس فاصله ندارد و
 * هم‌عرضِ کارِ اصلی است — نه کوچک‌تر، نه کم‌رنگ‌تر از حدِ کنتراست.
 * فاصلهٔ ۱۲ بینشان ثابت است.
 */
export function BottomActions({
  primaryLabel,
  onPrimary,
  primaryDisabled,
  skipLabel,
  onSkip,
}: BottomActionsProps) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <button
        type="button"
        onClick={onPrimary}
        disabled={primaryDisabled}
        className={[
          'type-button flex h-12 w-full items-center justify-center rounded-control px-6',
          primaryDisabled
            ? 'bg-muted text-ink-muted'
            : 'bg-inverse text-on-inverse',
        ].join(' ')}
      >
        {primaryLabel}
      </button>

      <button
        type="button"
        onClick={onSkip}
        className="type-button flex h-12 w-full items-center justify-center rounded-control text-ink-muted"
      >
        {skipLabel}
      </button>
    </div>
  )
}
