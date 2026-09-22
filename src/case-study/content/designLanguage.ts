/** بخش ۱۰ — متن‌ها و مقدارها عیناً از فریمِ design language. */
export const designLanguage = {
  number: '10',
  label: 'design language',
  title: 'زبانِ بصری',
  lede: 'یک کالکشن، یک مود، چهل توکن. رنگ‌های اولیه ارزش را نگه می‌دارند و نقش‌ها می‌گویند آن ارزش کجا به کار می‌رود؛ کامپوننت‌ها فقط به نقش می‌بندند.',
  logo: {
    title: 'نشانهٔ «هم‌تراز» · دو میلهٔ هم‌اندازه',
    body: 'هم‌اندازه بودنِ دو میله خودِ معناست: دور کردن، متفاوت کردن، چرخاندن و سایه دادن ممنوع است. فاصلهٔ آزاد به اندازهٔ عرضِ یک میله. زیرِ بیست‌وچهار پیکسل فقط نسخهٔ فاوآیکن، که هندسه‌اش جداست.',
  },
  contrast: {
    title: 'روی تیره، کهربایی می‌نشیند نه آجری',
    body: 'آجری روی زمینهٔ تیره سه به یک است و کهربایی روی کاغذ دو و نیم به یک. پس هر زمینه رنگِ خودش را دارد — پنج حالتِ رنگی، و رنگِ تازه اضافه نمی‌شود.',
    note: '۲۱ فایلِ SVG · عنوان در همه outline است، پس فونت لازم نیست',
  },
  colour: {
    kicker: 'COLOUR · 11 PRIMITIVES → 12 ROLES',
    primitives: [
      { name: 'ground', hex: '#F3EFE7' },
      { name: 'surface', hex: '#FFFDF8' },
      { name: 'line', hex: '#DCD5C9' },
      { name: 'ink-900', hex: '#14120F' },
      { name: 'ink-700', hex: '#3A342C' },
      { name: 'ink-500', hex: '#6B6257' },
      { name: 'accent-600', hex: '#A8421C' },
      { name: 'accent-500', hex: '#D4653A' },
      { name: 'accent-100', hex: '#F6E7DF' },
      { name: 'signal', hex: '#27664A' },
      { name: 'on-ink', hex: '#FFFDF8' },
    ],
    roles: [
      { role: 'bg-page', from: 'ground', hex: '#F3EFE7' },
      { role: 'bg-surface', from: 'surface', hex: '#FFFDF8' },
      { role: 'bg-inverse', from: 'ink-900', hex: '#14120F' },
      { role: 'bg-muted', from: 'line', hex: '#DCD5C9' },
      { role: 'accent-strong', from: 'accent-600', hex: '#A8421C' },
      { role: 'border-default', from: 'line', hex: '#DCD5C9' },
      { role: 'icon-default', from: 'ink-900', hex: '#14120F' },
      { role: 'text-primary', from: 'ink-900', hex: '#14120F' },
      { role: 'text-secondary', from: 'ink-700', hex: '#3A342C' },
      { role: 'text-muted', from: 'ink-500', hex: '#6B6257' },
      { role: 'text-on-inverse', from: 'on-ink', hex: '#FFFDF8' },
      { role: 'text-accent', from: 'accent-600', hex: '#A8421C' },
    ],
    note: 'هیچ کامپوننتی مستقیم به رنگِ اولیه بسته نیست؛ استثناش یک خط در تصویرسازیِ حالتِ صفر است که در سنجش علامت خورد و اصلاح نشد.',
  },
  geometry: {
    kicker: 'GEOMETRY · 4 RADII · 8 SPACES',
    radii: [
      { name: 'radius/inset', className: 'rounded-inset' },
      { name: 'radius/control', className: 'rounded-control' },
      { name: 'radius/card', className: 'rounded-card' },
      { name: 'radius/pill', className: 'rounded-pill' },
    ],
    spaces: [4, 8, 12, 16, 24, 32, 64, 72],
    note: 'چیزی که سیستم ندارد و در سنجش دیده شد: توکنِ ضخامتِ خط، توکنِ سایه، و مقیاسِ ابعاد. پانزده گروه مقدارِ bind‌نشده تقریباً همه از همین سه نبود می‌آیند.',
  },
  type: {
    kicker: 'TYPE · MEEM · 8 STYLES',
    styles: [
      {
        spec: 'heading/question  ·  20/Bold',
        sample: 'این روزها بیشتر درگیر چه چیزی هستید؟',
        className: 'type-question',
      },
      {
        spec: 'title/card  ·  15/Bold',
        sample: 'نگار موسوی',
        className: 'type-card-title',
      },
      {
        spec: 'button/label  ·  15/Bold',
        sample: 'دیدن زمان‌های آزاد',
        className: 'type-button',
      },
      {
        spec: 'body/default  ·  15/Regular',
        sample: 'این فهرست بر اساس چیزهایی چیده شده که خودتان گفتید.',
        className: 'type-body',
      },
      {
        spec: 'label/default  ·  14/Medium',
        sample: 'شب‌ها نمی‌خوابم',
        className: 'type-label',
      },
      {
        spec: 'caption/paragraph  ·  13/Regular',
        sample: 'هر مورد یا مواردی که به حالِ روزهایتان نزدیک‌تر است.',
        className: 'type-caption-paragraph',
      },
      {
        spec: 'caption/default  ·  13/Regular',
        sample: 'به قلم درمانگر',
        className: 'type-caption',
      },
      {
        spec: 'caption/meta  ·  12/Regular',
        sample: 'دو پرسش، بعد فهرست.',
        className: 'type-meta',
      },
    ],
  },
}
