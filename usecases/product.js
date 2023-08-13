import {
    getProductsRepo,
    getProductByIDRepo,
    addProductRepo,
    updateProductRepo,
    deleteProductRepo,
} from '../repo/products/product.js';
import streamifier from 'streamifier';

import {v2 as cloudinary} from 'cloudinary';

export const getProductsUsecase = () => {

    return getProductsRepo();

};

export const getProductByIDUsecase = async (id) => {

    if(!id){
        throw new Error(`Invalid Id`);
    }

    await getProductByIDRepo(id);

    return product;
};

export const addProductUsecase = async (title, price, url, image) => {

    if(!title|| !price || !url || !image){
        throw new Error(`Incomplete Body!`);
    };

    try {

        const upload = (req) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                  (error, result) => {
                    if (result) {
                      resolve(result);
                    } else {
                      reject(error);
                    }
                  }
                );
    
              streamifier.createReadStream(req).pipe(stream);
            });
        }
        const imageData = await upload(image);
        return addProductRepo(title, price, url, imageData.secure_url);

    } catch(err ) {

        throw new Error(err.message);
    };

};

export const updateProductUsecase = async (id, title, price, url, image) => {

    if(!title && !price && !image) {
        throw new Error(`Invalid Body!`);
    };

    if(!image) {
        return updateProductRepo(id, title, price, url);
    };
    
    const upload = await cloudinary.uploader.upload(image.path);

    return updateProductRepo(id, title, price, url, upload.secure_url);

};

export const deleteProductUsecase = (id) => {

    if(!id) {
        throw new Error(`Invalid Id`);
    };

    return deleteProductRepo(id);

}