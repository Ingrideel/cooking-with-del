import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const uploadImage = async (file: string, public_id?: string) => {
  try {
    const apiRes = await cloudinary.uploader.upload(file, {
      public_id,
    });

    return apiRes;
  } catch (error) {
    console.log(error);
  }
};

const STATIC_FOLDER = "static" as const;
// const RECIPES_DATA_FILE = "recipes.json" as const;

export const uploadImages = async () => {
  const paths = await fs.readdir(STATIC_FOLDER);
  const imagesPaths = paths.filter((path) => path.includes("jpeg"));
  const promises = imagesPaths.map(async (imagePath) =>
    uploadImage(`${STATIC_FOLDER}/${imagePath}`, imagePath.split(".")[0])
  );

  return await Promise.all(promises);
};
