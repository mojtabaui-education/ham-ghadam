import type { Therapist } from '../components/ResultCard'
import photo1 from '../assets/photos/therapist-1.png'
import photo2 from '../assets/photos/therapist-2.png'
import photo3 from '../assets/photos/therapist-3.png'

/**
 * دادهٔ ساختگیِ فهرست.
 *
 * نام‌ها و عکس‌ها از خودِ فریمِ فیگما آمده‌اند. چهار قلمِ کارت در فیگما
 * placeholder بودند — {قیمت}، {مدت}، {شیوه}، {توضیح} — و اینجا با مقدارِ
 * باورپذیر پر شده‌اند. اگر کاربرِ تست روی کارت «{قیمت}» ببیند، از آن لحظه
 * دارد به یک پروتوتایپ نگاه می‌کند نه به یک اپ، و بازخوردش عوض می‌شود.
 *
 * حدس: خودِ مقادیر ساختگی‌اند و از هیچ داده‌ای در datas/ نیامده‌اند.
 */
export const therapists: Therapist[] = [
  {
    id: 'negar-mousavi',
    name: 'نگار موسوی',
    photo: photo1,
    duration: '۴۵ دقیقه',
    price: '۳۲۰٬۰۰۰ تومان',
    ownWords: 'آرام و شنونده',
    format: 'آنلاین',
  },
  {
    id: 'amir-rostami',
    name: 'امیر رستمی',
    photo: photo2,
    duration: '۵۰ دقیقه',
    price: '۲۸۰٬۰۰۰ تومان',
    ownWords: 'کوتاه و مستقیم',
    format: 'آنلاین و حضوری',
  },
  {
    id: 'shirin-kazemi',
    name: 'شیرین کاظمی',
    photo: photo3,
    duration: '۴۵ دقیقه',
    price: '۳۵۰٬۰۰۰ تومان',
    ownWords: 'صبور، بی‌عجله',
    format: 'حضوری',
  },
]
