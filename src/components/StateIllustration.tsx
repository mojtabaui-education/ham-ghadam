import type { ReactNode } from 'react'

import ring from '../assets/illustrations/empty-ring.png'
import sparkle1 from '../assets/illustrations/sparkle-1.svg'
import sparkle2 from '../assets/illustrations/sparkle-2.svg'

/**
 * قابِ مشترکِ تصویرهای حالت.
 *
 * هر سه صفحهٔ حالت — بدون‌نتیجه، آفلاین و خروج — همین حلقهٔ چین‌چین و همان دو
 * جرقه را در همان مختصات دارند و فقط وسطشان فرق می‌کند. پس قاب یکی است و
 * نشانهٔ وسط به‌صورت children می‌آید.
 *
 * تصویر تزئینی است: هیچ خبری نمی‌دهد که در متنِ زیرش نباشد، پس از دیدِ
 * صفحه‌خوان پنهان می‌ماند.
 */
export function StateIllustration({ children }: { children: ReactNode }) {
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

      {children}
    </div>
  )
}
