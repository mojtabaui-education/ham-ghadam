import chevronRightIcon from '../assets/icons/chevron-right.svg'
import closeIcon from '../assets/icons/close.svg'
import logo from '../assets/icons/logo.svg'

type NavRowProps = {
  /** close مسیر را می‌بندد (UC-06)، back به ایستگاهِ قبل برمی‌گردد (UC-02). */
  icon: 'close' | 'back'
  /** متنِ خواندنی برای دکمه. صفحه‌خوان این را می‌خواند، نه آیکن را. */
  actionLabel: string
  onAction: () => void
}

/**
 * سطرِ بالای صفحه: یک کار در ابتدا، نشانه در انتها.
 *
 * در فیگما جایشان برعکس بود — نشانه در ابتدا و کار در انتها. جابه‌جا شد چون
 * chevron در RTL به سمتِ راست اشاره می‌کند و باید لبهٔ راست بنشیند، و برای
 * اینکه نشانه بینِ ایستگاه‌ها نپرد، هر سه صفحه با هم عوض شدند.
 *
 * توضیحِ کامپوننت در فیگما خودش نوشته که ناحیهٔ لمسِ آیکن ۲۴ است و زیرِ
 * حداقلِ ۴۸ می‌افتد. اینجا گلیف همان ۲۴ می‌ماند تا طرح عوض نشود، ولی دکمه
 * ۴۸ است و با حاشیهٔ منفی سرِ جای طرح می‌نشیند — ظاهر یکی، لمس درست.
 */
export function NavRow({ icon, actionLabel, onAction }: NavRowProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <button
        type="button"
        onClick={onAction}
        aria-label={actionLabel}
        className="-ms-3 flex size-12 shrink-0 items-center justify-center"
      >
        <img
          src={icon === 'close' ? closeIcon : chevronRightIcon}
          alt=""
          className="size-6"
        />
      </button>

      <img src={logo} alt="هم‌قدم" className="size-7 shrink-0" />
    </div>
  )
}
