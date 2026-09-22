import {
  Callout,
  Card,
  CardRow,
  Section,
  SectionHead,
} from '../components/primitives'
import { problem } from '../content/problem'

/** بخش ۰۱ — مسئله چه بود. */
export function Problem() {
  return (
    <Section id="problem">
      <SectionHead
        number={problem.number}
        label={problem.label}
        title={problem.title}
        lede={problem.lede}
      />

      <CardRow min={280}>
        {problem.claims.map((claim) => (
          <Card key={claim.kicker} kicker={claim.kicker} title={claim.title} />
        ))}
      </CardRow>

      <Callout kicker={problem.callout.kicker} note={problem.callout.note}>
        {problem.callout.body}
      </Callout>
    </Section>
  )
}
