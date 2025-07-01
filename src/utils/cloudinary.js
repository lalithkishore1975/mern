import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Cloudinary config
cloudinary.config({
  cloud_name: "drcnwh10s",
  api_key: "461919138361947",
  api_secret: "0Q-wy_9BNUV_sqls-sGhxPgMfRs"
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.log("❌ No file path provided to upload.");
      return null;
    }

    console.log("📤 Uploading to Cloudinary:", localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    console.log("✅ Upload successful:", response.url);
    return response;
  } catch (error) {
    console.error("❌ Cloudinary upload error:", error.message); // 👈 important
    fs.unlinkSync(localFilePath); // delete local file on error
    return null;
  }
};

export { uploadOnCloudinary };
