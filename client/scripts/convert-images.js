const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

// Images to convert (relative to src/assets/images)
const IMAGES_DIR = path.join(__dirname, '..', 'src', 'assets', 'images');
const targets = [
  'bodh-gaya.jpg',
  'bodh-day1.png',
  'bodh-night1.png',
  'bodh-vajrasana.png',
  'bodh-misc1.png'
];

async function convert() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('Images directory not found:', IMAGES_DIR);
    process.exit(1);
  }

  for (const file of targets) {
    const input = path.join(IMAGES_DIR, file);
    if (!fs.existsSync(input)) {
      console.warn('Skipping missing file:', file);
      continue;
    }

    const base = path.parse(file).name;
    const outWebp = path.join(IMAGES_DIR, `${base}.webp`);
    const outSmall = path.join(IMAGES_DIR, `${base}-800.webp`);
    const outThumb = path.join(IMAGES_DIR, `${base}-400.webp`);

    try {
      // Full quality webp (still compressed)
      await sharp(input)
        .webp({ quality: 80 })
        .toFile(outWebp);

      // Medium size
      await sharp(input)
        .resize({ width: 1200 })
        .webp({ quality: 78 })
        .toFile(outSmall);

      // Thumbnail
      await sharp(input)
        .resize({ width: 480 })
        .webp({ quality: 72 })
        .toFile(outThumb);

      console.log(`Converted ${file} -> ${base}.webp, ${base}-800.webp, ${base}-400.webp`);
    } catch (err) {
      console.error('Failed converting', file, err.message || err);
    }
  }
}

convert();
