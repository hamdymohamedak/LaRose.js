/**
 * Image Compression Utility for WebP Format
 *
 * This script automates the process of converting and compressing all images
 * within the application's asset directory to the WebP format, significantly
 * reducing file sizes while maintaining quality.
 *
 * ## Overview
 * The utility scans the specified directory for images in JPG, JPEG, and PNG formats,
 * converts them to WebP format, and allows the user to specify the quality level
 * for compression. The original images are deleted after successful conversion
 * to free up space.
 *
 * ## Implementation Details
 * - **Source Directory:** All project images should be placed in the "./src/assets" directory.
 * - **Conversion Trigger:** The conversion process is automatically triggered when the project is run.
 * - **Quality Control:** Users can define the compression quality via a command-line argument,
 *   with a default value of 80 if not specified.
 *
 * ## Usage
 * To execute the image compression utility, run the following command in the terminal:
 *
 * ```
 * node convertToWebP.js ./src/assets [quality]
 * ```
 *
 * Replace `[quality]` with a number between 1 and 100 to adjust the output quality
 * of the compressed images. For instance, a quality of 60 will produce smaller file sizes,
 * while 100 will yield the best visual quality.
 *
 * ### Example Command
 * ```
 * node convertToWebP.js ./src/assets 70
 * ```
 * This command compresses all images in the "./src/assets" directory to WebP format with a quality level of 70.
 *
 * ## Dependencies
 * This script utilizes the `sharp` library for image processing. Ensure that the library is installed
 * in your project by running:
 *
 * ```
 * npm install sharp
 * ```
 *
 * ## Error Handling
 * The utility includes error handling to catch and log any issues that arise during the
 * image processing workflow, ensuring that users are informed of any problems encountered.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function convertImagesToWebP(folderPath, quality = 80) {
  try {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const ext = path.extname(file).toLowerCase();

      if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
        const newFilePath = path.join(
          folderPath,
          path.basename(file, ext) + ".webp"
        );

        await sharp(filePath)
          .webp({
            quality,
            lossless: false,
          })
          .toFile(newFilePath);

        fs.unlinkSync(filePath);
        console.log(`Converted and deleted: ${filePath}`);
      }
    }
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

const folderPath = process.argv[2];
const quality = parseInt(process.argv[3]) || 80;

if (!folderPath) {
  console.error("Usage: node convertToWebP.js <folder_path> [quality]");
  process.exit(1);
}

convertImagesToWebP(folderPath, quality);
