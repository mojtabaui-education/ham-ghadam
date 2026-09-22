import { Assumptions } from './sections/Assumptions'
import { Audit } from './sections/Audit'
import { Bridge } from './sections/Bridge'
import { Components } from './sections/Components'
import { Decisions } from './sections/Decisions'
import { DesignLanguage } from './sections/DesignLanguage'
import { Held } from './sections/Held'
import { Hero } from './sections/Hero'
import { Insight } from './sections/Insight'
import { Lessons } from './sections/Lessons'
import { Next } from './sections/Next'
import { Outcome } from './sections/Outcome'
import { Persona } from './sections/Persona'
import { Problem } from './sections/Problem'
import { Process } from './sections/Process'
import { Screens } from './sections/Screens'
import { Structure } from './sections/Structure'
import { Synthesis } from './sections/Synthesis'
import { Words } from './sections/Words'

/**
 * کیس‌استادیِ هم‌قدم — یک صفحهٔ بلند، نوزده بخش.
 *
 * صفحهٔ جدایی از خودِ اپ است و روی /case-study/ می‌نشیند؛ نه روتری در کار
 * است نه کدِ مشترکی جز توکن‌ها، فونت، و کامپوننت‌هایی که بخش ۱۱ زنده
 * نشانشان می‌دهد.
 */
export function CaseStudy() {
  return (
    <main className="mx-auto w-full max-w-[1920px] bg-page">
      <Hero />
      <Problem />
      <Assumptions />
      <Process />
      <Synthesis />
      <Persona />
      <Insight />
      <Decisions />
      <Bridge />
      <Structure />
      <DesignLanguage />
      <Components />
      <Screens />
      <Words />
      <Audit />
      <Held />
      <Outcome />
      <Lessons />
      <Next />
    </main>
  )
}
