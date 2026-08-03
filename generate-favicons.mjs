import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputIcon = 'public/images/codex-con-fondo.jpg';

const generateSizes = async () => {
  if (!fs.existsSync(inputIcon)) {
    console.error(`Input file not found: ${inputIcon}`);
    return;
  }

  // Common sizes
  const sizes = [16, 32, 180, 192, 512];
  
  for (const size of sizes) {
    await sharp(inputIcon)
      .resize(size, size)
      .toFile(`public/favicon-${size}x${size}.png`);
    console.log(`Generated favicon-${size}x${size}.png`);
  }

  // Generate favicon.ico (using 32x32 as fallback for simple implementation)
  await sharp(inputIcon)
    .resize(32, 32)
    .toFile('public/favicon.ico');
  console.log(`Generated favicon.ico`);
};

generateSizes().catch(console.error);
