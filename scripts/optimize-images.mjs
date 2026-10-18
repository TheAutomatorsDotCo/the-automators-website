/**
 * Image optimization script.
 * Converts images to WebP, resizes testimonials, and compresses.
 */

import sharp from 'sharp';
import { readdir, copyFile, stat, mkdir } from 'fs/promises';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const TESTIMONIAL_IMAGES = ['candice.png', 'melany.png', 'brad.png'];
const TESTIMONIAL_SIZE = 160;

const KEEP_ORIGINAL = ['logo.png', 'ed-logo.svg', 'BingSiteAuth.xml', 'robots.txt', 'sitemap.xml'];

const IMAGES_TO_OPTIMIZE = [
  'homehero.png',
  'ta-logo.png',
  'candice.png',
  'melany.png',
  'brad.png',
  'sig-braam-image.png',
  'in-en-om-logo.png',
  'pr-logo.png',
  'dd-logo.png',
  'andrew.png',
  'wesley.png',
  'francois.jpg',
];

async function optimizeImage(filename) {
  const inputPath = join(PUBLIC_DIR, filename);
  const { name, ext } = parse(filename);
  
  if (!existsSync(inputPath)) {
    console.log(`  Skipping ${filename} (not found)`);
    return;
  }

  const stats = await stat(inputPath);
  const originalSize = stats.size;

  const isTestimonial = TESTIMONIAL_IMAGES.includes(filename);
  const outputWebP = join(PUBLIC_DIR, `${name}.webp`);

  let pipeline = sharp(inputPath);

  if (isTestimonial) {
    pipeline = pipeline.resize(TESTIMONIAL_SIZE, TESTIMONIAL_SIZE, {
      fit: 'cover',
      position: 'top',
    });
  }

  await pipeline
    .webp({ quality: 85 })
    .toFile(outputWebP);

  const webpStats = await stat(outputWebP);
  const savings = ((originalSize - webpStats.size) / originalSize * 100).toFixed(1);
  
  console.log(`  ${filename} -> ${name}.webp (${(originalSize/1024).toFixed(0)}KB -> ${(webpStats.size/1024).toFixed(0)}KB, -${savings}%)`);

  const outputOriginal = join(PUBLIC_DIR, `${name}-fallback${ext}`);
  if (isTestimonial) {
    await sharp(inputPath)
      .resize(TESTIMONIAL_SIZE, TESTIMONIAL_SIZE, {
        fit: 'cover',
        position: 'top',
      })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(outputOriginal);
  }
}

async function main() {
  console.log('[optimize-images] Starting image optimization...\n');

  for (const filename of IMAGES_TO_OPTIMIZE) {
    try {
      await optimizeImage(filename);
    } catch (err) {
      console.error(`  Error processing ${filename}:`, err.message);
    }
  }

  console.log('\n[optimize-images] Done!');
}

main().catch(console.error);
