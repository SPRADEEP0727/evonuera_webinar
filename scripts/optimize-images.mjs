// Convert PNG/JPG images in public/images to optimized WebP.
// Usage: npm run optimize:img
import sharp from 'sharp'
import { readdirSync, statSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const DIR = 'public/images'
const QUALITY = 80

const files = readdirSync(DIR).filter((f) => /\.(png|jpe?g)$/i.test(f))
if (files.length === 0) {
  console.log('No PNG/JPG images found in', DIR)
  process.exit(0)
}

for (const file of files) {
  const src = join(DIR, file)
  const out = join(DIR, basename(file, extname(file)) + '.webp')
  const info = await sharp(src).webp({ quality: QUALITY, effort: 6 }).toFile(out)
  const before = statSync(src).size
  const after = statSync(out).size
  console.log(
    `${file} → ${basename(out)}  ${info.width}x${info.height}  ` +
      `${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB ` +
      `(-${Math.round((1 - after / before) * 100)}%)`
  )
}
