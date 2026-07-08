// One-off: upload the hero background video to Cloudinary and print its secure URL.
require('dotenv').config({ path: '.env.local' });
const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node scripts/upload-hero-video.js <path-to-video>');
  process.exit(1);
}

cloudinary.uploader.upload(
  filePath,
  { resource_type: 'video', folder: 'leo-club/hero', public_id: 'hero-loop' },
  (err, result) => {
    if (err) {
      console.error('Upload failed:', err);
      process.exit(1);
    }
    console.log('Secure URL:', result.secure_url);
    console.log('Public ID:', result.public_id);
    console.log('Duration:', result.duration);
    console.log('Bytes:', result.bytes);
  }
);
