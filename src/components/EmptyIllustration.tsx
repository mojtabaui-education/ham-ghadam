import ring from '../assets/illustrations/empty-ring.png'
import lensHandle from '../assets/illustrations/lens-handle.svg'
import sparkle1 from '../assets/illustrations/sparkle-1.svg'
import sparkle2 from '../assets/illustrations/sparkle-2.svg'

/**
 * ذره‌بینِ صفحهٔ بدون‌نتیجه.
 *
 * حلقهٔ چین‌چین، دو جرقه و دستهٔ ذره‌بین از فیگما export شده‌اند. خودِ عدسی و
 * صورتِ داخلش در فیگما هم مستطیل و دایره بوده‌اند، نه وکتور، پس اینجا هم با
 * div و border درمی‌آیند.
 *
 * تصویر تزئینی است: هیچ خبری نمی‌دهد که در متنِ زیرش نباشد، پس از دیدِ
 * صفحه‌خوان پنهان می‌ماند.
 */
export function EmptyIllustration() {
  return (
    <div className="relative size-40 shrink-0" aria-hidden="true">
      <img
        src={ring}
        alt=""
        width={120}
        height={120}
        className="absolute top-1/2 left-1/2 size-30 -translate-x-1/2 -translate-y-1/2"
      />

      <img
        src={sparkle1}
        alt=""
        className="absolute top-[calc(50%-35px)] left-[calc(50%-45px)] size-2 -translate-x-1/2 -translate-y-1/2"
      />
      <img
        src={sparkle2}
        alt=""
        className="absolute top-[calc(50%+20px)] left-[calc(50%+50px)] size-[5px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* عدسی */}
      <div className="absolute top-[calc(50%-10px)] left-[calc(50%-10px)] flex size-18 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[3px] border-ink-muted bg-surface drop-shadow-[0_4px_6px_rgba(20,18,15,0.07)]">
        <div className="flex items-center justify-center gap-3">
          <div className="h-0.5 w-2 rounded-[1px] bg-inverse" />
          <div className="h-0.5 w-2 rounded-[1px] bg-inverse" />
        </div>
        <div className="flex flex-col items-start pt-1.5">
          <div className="h-0.5 w-4 rounded-[1px] bg-accent" />
        </div>
      </div>

      {/* دسته */}
      <div className="absolute top-[calc(50%+42.14px)] left-[calc(50%+22.14px)] flex size-[28.284px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="flex-none rotate-45">
          <div className="relative h-0 w-10">
            <div className="absolute inset-x-0 top-[-5px] bottom-0">
              <img src={lensHandle} alt="" className="block size-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
