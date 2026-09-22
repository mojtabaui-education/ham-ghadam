import { readFileSync, writeFileSync } from 'node:fs'
import { compress } from 'wawoff2'

const weights = ['Regular', 'Medium', 'Bold']
for (const w of weights) {
  const src = `src/assets/fonts/Meem-${w}.ttf`
  const out = `src/assets/fonts/Meem-${w}.woff2`
  const buf = readFileSync(src)
  const woff2 = await compress(buf)
  writeFileSync(out, Buffer.from(woff2))
  console.log(`${w}: ${(buf.length / 1024).toFixed(0)}K -> ${(woff2.length / 1024).toFixed(0)}K`)
}
