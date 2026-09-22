import bookmark from '../assets/illustrations/bookmark.svg'
import cloud from '../assets/illustrations/cloud.svg'
import lensHandle from '../assets/illustrations/lens-handle.svg'

/**
 * نشانه‌های وسطِ تصویرهای حالت.
 *
 * هرکدام داخلِ قابِ ۱۶۰ پیکسلیِ `StateIllustration` مطلق می‌نشیند، با همان
 * مختصاتی که در فیگما دارند. جاهایی که فیگما هم مستطیل و دایره داشته با div
 * درمی‌آیند و فقط مسیرهای وکتور export شده‌اند.
 */

/** ذره‌بین با صورتِ ناراحت — صفحهٔ بدون‌نتیجه. */
export function LensGlyph() {
  return (
    <>
      <div className="absolute top-[calc(50%-10px)] left-[calc(50%-10px)] flex size-18 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[3px] border-ink-muted bg-surface drop-shadow-[0_4px_6px_rgba(20,18,15,0.07)]">
        <div className="flex items-center justify-center gap-3">
          <div className="h-0.5 w-2 rounded-[1px] bg-inverse" />
          <div className="h-0.5 w-2 rounded-[1px] bg-inverse" />
        </div>
        <div className="flex flex-col items-start pt-1.5">
          <div className="h-0.5 w-4 rounded-[1px] bg-accent" />
        </div>
      </div>

      <div className="absolute top-[calc(50%+42.14px)] left-[calc(50%+22.14px)] flex size-[28.284px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="flex-none rotate-45">
          <div className="relative h-0 w-10">
            <div className="absolute inset-x-0 top-[-5px] bottom-0">
              <img src={lensHandle} alt="" className="block size-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/** ابر با پیوندِ پاره — صفحهٔ آفلاین. */
export function CloudGlyph() {
  return (
    <>
      <div className="absolute top-[57px] left-[41px] h-[46px] w-[78px]">
        <div className="absolute inset-[-17.39%_-15.38%_-34.78%_-15.38%]">
          <img src={cloud} alt="" className="block size-full" />
        </div>
      </div>

      <div className="absolute top-[116.5px] left-[46px] h-[3px] w-6 rounded-[1.5px] bg-ink-muted" />
      <div className="absolute top-[116.5px] left-[90px] h-[3px] w-6 rounded-[1.5px] bg-ink-muted" />

      {/* دو خطِ متقاطع، جای پیوندِ پاره */}
      <div className="absolute top-[113.05px] left-[75.05px] flex size-[9.899px] items-center justify-center">
        <div className="-rotate-45 flex-none">
          <div className="h-[3px] w-[11px] rounded-[1.5px] bg-accent" />
        </div>
      </div>
      <div className="absolute top-[113.05px] left-[75.05px] flex size-[9.899px] items-center justify-center">
        <div className="flex-none rotate-45">
          <div className="h-[3px] w-[11px] rounded-[1.5px] bg-accent" />
        </div>
      </div>
    </>
  )
}

/** دفترِ بسته با نشانک — صفحهٔ خروج. */
export function BookGlyph() {
  return (
    <>
      <div className="absolute top-[50px] left-[58px] h-[70px] w-[54px] rounded-[6px] border-[3px] border-ink-muted bg-muted" />
      <div className="absolute top-[44px] left-[50px] h-[70px] w-[54px] rounded-[6px] border-[3px] border-ink-muted bg-surface shadow-[0_4px_12px_0_rgba(20,18,15,0.07)]" />
      <div className="absolute top-[52px] left-[58px] h-[54px] w-[3px] rounded-[1.5px] bg-border" />
      <div className="absolute top-[64px] left-[68px] h-[3px] w-[22px] rounded-[1.5px] bg-border" />
      <div className="absolute top-[74px] left-[68px] h-[3px] w-[15px] rounded-[1.5px] bg-border" />
      <img
        src={bookmark}
        alt=""
        className="absolute top-[90px] left-[84px] h-10 w-[14px]"
      />
    </>
  )
}
