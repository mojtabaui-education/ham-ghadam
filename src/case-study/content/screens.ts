import flow01 from '../screens/flow-01.png'
import flow02 from '../screens/flow-02.png'
import flow03 from '../screens/flow-03.png'
import flow04 from '../screens/flow-04.png'
import flow05 from '../screens/flow-05.png'
import flow06 from '../screens/flow-06.png'
import flow07 from '../screens/flow-07.png'
import flow08 from '../screens/flow-08.png'
import flow09 from '../screens/flow-09.png'

/**
 * بخش ۱۲ — متن‌ها عیناً از فریمِ screens.
 *
 * خودِ فریم‌های کوچک تصویرند، نه مارک‌آپ: در فیگما کپیِ مقیاس‌خوردهٔ همان
 * صفحه‌هایند و بازسازی‌شان در HTML یعنی یک نسخهٔ دومِ اپ که از اصل عقب
 * می‌افتد. متنِ هر فلو کنارشان به‌صورت متنِ واقعی می‌ماند.
 */
export const screens = {
  number: '12',
  label: 'screens',
  title: 'بیست‌وچهار فریم، در نُه فلو',
  lede: 'فریم‌ها بر اساسِ فلو بخش‌بندی شده‌اند، نه بر اساسِ ایستگاه: مسیرِ بی‌گره بالا، و هر مسیرِ جانبی زیرش. هر فریم از همان کامپوننت‌ها ساخته شده و رشته‌هایش از فایلِ متن آمده.',
  flows: [
    {
      tag: 'flow 01',
      title: 'مسیرِ بی‌گره',
      latin: '· Happy path',
      body: 'هر دو پرسش به ترتیب پاسخ داده می‌شوند: حالِ امروز، بعد دسترسی، بعد فهرست.',
      image: flow01,
    },
    {
      tag: 'flow 02',
      title: 'واژهٔ خودِ کاربر',
      latin: '· Own words',
      body: 'مسیرِ جانبی وقتی هیچ گزینه‌ای او نیست و خودش می‌نویسد.',
      image: flow02,
    },
    {
      tag: 'flow 03',
      title: 'رد کردنِ یک پرسش',
      latin: '· Skipping a question',
      body: 'پرسش در یک لمس کنار می‌رود و فهرست با معیاری غیر از پاسخِ کاربر ساخته می‌شود؛ صفحه همان معیار را نام می‌برد.',
      image: flow03,
    },
    {
      tag: 'flow 04',
      title: 'بازگشت و عوض کردنِ پاسخ',
      latin: '· Going back and changing',
      body: 'پاسخی برداشته یا عوض می‌شود و فهرست دوباره چیده می‌شود؛ پاسخِ قبلی از دست نمی‌رود.',
      image: flow04,
    },
    {
      tag: 'flow 05',
      title: 'حالتِ بدون‌نتیجه',
      latin: '· No result',
      body: 'ترکیبِ پاسخ‌ها و زمان‌ها چیزی برای نشان دادن نمی‌گذارد: تکرارِ عبارتِ کاربر، قیدِ مسبب اگر معلوم باشد، و دقیقاً یک کارِ بعدی.',
      image: flow05,
    },
    {
      tag: 'flow 06',
      title: 'بارگذاری',
      latin: '· Loading',
      body: 'فهرست دارد آماده می‌شود و خطِ معیار از قبل سرِ جایش است.',
      image: flow06,
    },
    {
      tag: 'flow 07',
      title: 'اتصالِ قطع',
      latin: '· Offline',
      body: 'اتصال رفته و یک کار پیشنهاد می‌شود: دوباره. ایلستریشن صورت ندارد و علامتِ منع هم نیست.',
      image: flow07,
    },
    {
      tag: 'flow 08',
      title: 'بستنِ مسیر',
      latin: '· Leaving the route',
      body: 'از هر ایستگاه، با یک لمس، بدونِ پرسیدنِ دلیل. کتابِ بسته با نشانک می‌گوید متوقف، نه تمام‌شده.',
      image: flow08,
    },
    {
      tag: 'flow 09',
      title: 'نماهای مرجع، نه حالت',
      latin: '· Reference views, not states',
      body: 'مطالعهٔ اسکرول و ترکیب، و یک نمای شیتِ پایینی. هیچ‌کدام در فهرستِ حالت‌های ساختار نیستند و در سنجش هم همین‌طور ثبت شدند.',
      image: flow09,
    },
  ],
}
