const cloudinary = require("cloudinary").v2
const dotenv = require("dotenv")

dotenv.config({ path: __dirname + '/.env' })

class CompressingService {
  async execute(image) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });

    return await cloudinary.uploader.upload(
      image, 
      {
        "crop":"limit",
        "tags":"samples",
        "width":300,
        "height":200
      });
  }
}

export default CompressingService