import type { Option } from './types'

/**
 * متنِ ایستگاه ۲ — عیناً از فریم s2-1.
 *
 * این ایستگاه برخلافِ ایستگاه ۱ زیرنویس ندارد (در فیگما واریانتِ
 * `Subtitle?=False`) و کادرِ متنِ آزاد هم ندارد؛ فقط دو گروهِ گزینه.
 */

export const station2 = {
  progress: {
    step: 2,
    total: 2,
    caption: 'دو پرسش، بعد فهرست.',
  },
  question: {
    title: 'چه زمانی برایتان مناسب است و جلسه را چطور می‌خواهید برگزار کنید؟',
  },
  groups: [
    {
      id: 'time',
      heading: 'زمان برگزاری',
      options: [
        { id: 's2-morning', emoji: '☀️', text: 'صبح‌ها' },
        { id: 's2-evening', emoji: '🌇', text: 'عصرها' },
        { id: 's2-night', emoji: '🌙', text: 'شب‌ها' },
      ] satisfies Option[],
    },
    {
      id: 'format',
      heading: 'شیوه برگزاری',
      options: [
        { id: 's2-online', emoji: '💻', text: 'آنلاین' },
        { id: 's2-in-person', emoji: '🏢', text: 'حضوری' },
      ] satisfies Option[],
    },
  ],
  actions: {
    primary: 'دیدن نتایج',
    skip: 'رد می‌کنم',
    back: 'برگشتن به پرسشِ قبل',
  },
} as const
