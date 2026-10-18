/**
 * Generate favicon files from logo.png
 * Creates favicon.ico (16/32/48), apple-touch-icon.png (180x180),
 * icon-192.png, icon-512.png, and site.webmanifest
 */

import sharp from 'sharp';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const LOGO_PATH = join(PUBLIC_DIR, 'logo.png');

const NAVY_BG = { r: 15, g: 15, b: 30, alpha: 1 };

async function createIconWithBackground(size, outputName) {
  const logoSize = Math.round(size * 0.75);
  const padding = Math.round((size - logoSize) / 2);

  const logo = await sharp(LOGO_PATH)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: NAVY_BG,
    },
  })
    .composite([{ input: logo, top: padding, left: padding }])
    .png()
    .toFile(join(PUBLIC_DIR, outputName));

  console.log(`  Created ${outputName} (${size}x${size})`);
}

async function createFaviconIco() {
  const sizes = [16, 32, 48];
  const buffers = [];

  for (const size of sizes) {
    const logoSize = Math.round(size * 0.75);
    const padding = Math.round((size - logoSize) / 2);

    const logo = await sharp(LOGO_PATH)
      .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    const buffer = await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: NAVY_BG,
      },
    })
      .composite([{ input: logo, top: padding, left: padding }])
      .png()
      .toBuffer();

    buffers.push({ size, buffer });
  }

  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);
  icoHeader.writeUInt16LE(1, 2);
  icoHeader.writeUInt16LE(sizes.length, 4);

  let offset = 6 + (16 * sizes.length);
  const entries = [];
  const pngDatas = [];

  for (const { size, buffer } of buffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    pngDatas.push(buffer);
    offset += buffer.length;
  }

  const ico = Buffer.concat([icoHeader, ...entries, ...pngDatas]);
  await writeFile(join(PUBLIC_DIR, 'favicon.ico'), ico);
  console.log('  Created favicon.ico (16/32/48)');
}

async function createWebManifest() {
  const manifest = {
    name: 'The Automators',
    short_name: 'Automators',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#0f0f1e',
    background_color: '#0f0f1e',
    display: 'standalone',
  };

  await writeFile(
    join(PUBLIC_DIR, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('  Created site.webmanifest');
}

async function main() {
  console.log('[generate-favicons] Generating favicon files...\n');

  await createFaviconIco();
  await createIconWithBackground(180, 'apple-touch-icon.png');
  await createIconWithBackground(192, 'icon-192.png');
  await createIconWithBackground(512, 'icon-512.png');
  await createWebManifest();

  console.log('\n[generate-favicons] Done!');
}

main().catch(console.error);
