import { uploadImage } from "./uploadImages";

export const uploadProductImages = async (products) => {

    const updatedProducts = [];

    for (const product of products) {

        const updatedImages = [...product.images];

        for (let i = 0; i < product.imagesFiles.length; i++) {

            const file = product.imagesFiles[i];

            if (!file) continue;

            const imageUrl = await uploadImage(file);

            updatedImages[i] = imageUrl;
        }

        updatedProducts.push({
            ...product,
            images: updatedImages,
            imagesFiles: updatedImages.map(() => null)
        });
    }

    return updatedProducts;
};