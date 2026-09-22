/**
 * صفحهٔ کنترلِ پایه.
 * کارش این است که قبل از ساختِ صفحه‌های واقعی نشان بدهد فونت، توکن‌ها و RTL
 * سرِ جایشان نشسته‌اند. با اولین صفحهٔ واقعی جایگزین می‌شود.
 */
function App() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-[393px] bg-page px-6 py-8">
      <h1 className="type-question text-ink">
        امروز بیشتر با چه چیزی درگیری؟
      </h1>

      <p className="type-caption-paragraph mt-4 text-ink-muted">
        این متن برای کنترلِ رندرِ فارسی است: نیم‌فاصله، عددِ ۱۲۳۴۵، و یک خطِ
        بلند که باید درست بشکند و از راست شروع شود.
      </p>

      <div className="mt-6 flex flex-col gap-2">
        {['خواب', 'اضطراب', 'رابطه'].map((label) => (
          <button
            key={label}
            type="button"
            className="type-label rounded-control border border-border bg-surface px-4 py-3 text-start text-ink-secondary"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-card bg-surface p-6">
        <p className="type-card-title text-ink">نگار موسوی</p>
        <p className="type-meta mt-3 text-ink-muted">مدت جلسه</p>
        <p className="type-body mt-2 text-ink-secondary">۴۵ دقیقه</p>
      </div>

      <button
        type="button"
        className="type-button mt-6 w-full rounded-control bg-inverse px-4 py-4 text-on-inverse"
      >
        ادامه
      </button>

      <p className="type-caption mt-6 text-accent">عوض کردن یکی از پاسخ‌ها</p>
    </div>
  )
}

export default App
