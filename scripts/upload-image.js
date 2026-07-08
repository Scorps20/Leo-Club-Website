// Upload a photo to Cloudinary under leo-club/<folder>, auto-downscaling large
// source files (e.g. DSLR photos) so they clear Cloudinary's free-tier 10MB cap.
require("dotenv").config({ path: ".env.local" });
const os = require("os");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const MAX_BYTES = 9 * 1024 * 1024;

const filePath = process.argv[2];
const folder = process.argv[3] || "leo-club/misc";
const publicId = process.argv[4];

if (!filePath) {
  console.error(
    "Usage: node scripts/upload-image.js <path-to-image> <folder> [public_id]"
  );
  process.exit(1);
}

async function resolveUploadPath(originalPath) {
  const { size } = fs.statSync(originalPath);
  if (size <= MAX_BYTES) return originalPath;

  const tmpPath = path.join(
    os.tmpdir(),
    `leo-upload-${Date.now()}${path.extname(originalPath) || ".jpg"}`
  );
  await sharp(originalPath)
    .resize({ width: 2400, withoutEnlargement: true })
    .jpeg({ quality: 85 })
    .toFile(tmpPath);
  console.log(
    `Source was ${(size / 1024 / 1024).toFixed(1)}MB (over the 9MB cap) — downscaled a copy before upload.`
  );
  return tmpPath;
}

(async () => {
  try {
    const uploadPath = await resolveUploadPath(filePath);
    const result = await cloudinary.uploader.upload(uploadPath, {
      folder,
      ...(publicId ? { public_id: publicId } : {}),
    });
    console.log("Secure URL:", result.secure_url);
    console.log("Public ID:", result.public_id);
    console.log("Width x Height:", result.width, "x", result.height);
    console.log("Bytes:", result.bytes);
  } catch (err) {
    console.error("Upload failed:", err);
    process.exit(1);
  }
})();
