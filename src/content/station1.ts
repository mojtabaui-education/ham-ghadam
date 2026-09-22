import type { Option } from './types'

/**
 * متنِ ایستگاه ۱ — عیناً از فریم‌های فیگما.
 *
 * محتوا اینجا از کامپوننت جدا نگه داشته می‌شود چون در تستِ کاربر احتمالاً
 * همین جمله‌هاست که عوض می‌شود، نه ساختار.
 */

export const station1 = {
  progress: {
    step: 1,
    total: 2,
    caption: 'دو پرسش، بعد فهرست.',
  },
  question: {
    title: 'این روزها بیشتر درگیر چه چیزی هستید؟',
    subtitle: 'هر مورد یا مواردی که به حال روزهایتان نزدیکتر است.',
  },
  tags: [
    { id: 's1-morning', emoji: '😔', text: 'صبح‌ها بلند شدن برایم سخت است' },
    { id: 's1-empty', emoji: '😶', text: 'تهی‌ام؛ نه خوب، نه بد' },
    { id: 's1-numb', emoji: '😑', text: 'به کاری که می‌کنم هیچ حسی ندارم' },
    { id: 's1-same', emoji: '🔄', text: 'هر روز شبیه دیروز است' },
    { id: 's1-unknown', emoji: '❓', text: 'یک چیزی درست نیست، نمی‌دانم چه' },
    { id: 's1-sleep', emoji: '🌙', text: 'شب‌ها خوابم نمی‌برد' },
  ] satisfies Option[],
  freeTextPlaceholder: '✏️  با واژه‌های خودتان بنویسید',
  actions: {
    primary: 'ادامه',
    skip: 'رد می‌کنم',
    close: 'بستنِ مسیر',
  },
} as const
