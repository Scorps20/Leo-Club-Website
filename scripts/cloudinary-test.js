// Cloudinary onboarding test: upload a demo image, read back its metadata,
// and build an auto-optimized transformed URL.
require('dotenv').config({ path: '.env.local' });
const { v2: cloudinary } = require('cloudinary');

// 1. Configure Cloudinary from .env.local (never hardcode secrets in this file)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function main() {
  // 2. Upload a sample image from Cloudinary's public demo account
  const uploadResult = await cloudinary.uploader.upload(
    'https://res.cloudinary.com/demo/image/upload/sample.jpg',
    { folder: 'leo-club-test' }
  );
  console.log('Uploaded secure URL:', uploadResult.secure_url);
  console.log('Uploaded public ID:', uploadResult.public_id);

  // 3. Fetch metadata about the uploaded image
  const details = await cloudinary.api.resource(uploadResult.public_id);
  console.log('Width:', details.width);
  console.log('Height:', details.height);
  console.log('Format:', details.format);
  console.log('Bytes:', details.bytes);

  // 4. Transformed URL:
  //   fetch_format: 'auto' -> Cloudinary serves the best format for the requesting browser (WebP/AVIF/etc.)
  //   quality: 'auto'      -> Cloudinary picks the best quality/compression tradeoff automatically
  const transformedUrl = cloudinary.url(uploadResult.public_id, {
    fetch_format: 'auto',
    quality: 'auto',
  });
  console.log('Done! Click link below to see optimized version of the image. Check the size and the format.');
  console.log(transformedUrl);
}

main().catch((err) => {
  console.error('Cloudinary test failed:', err);
  process.exit(1);
});
