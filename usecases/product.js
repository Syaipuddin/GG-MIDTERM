import {
    getProductsRepo,
    getProductByIDRepo,
    addProductRepo,
    updateProductRepo,
    deleteProductRepo,
} from '../repo/products/product.js';
import { getVideoByIDRepo } from '../repo/videos/video.js';

import {v2 as cloudinary} from 'cloudinary';

export const getProductsUsecase = () => {

    return getProductsRepo();

};

export const getProductByIDUsecase = async (id) => {

    const product = await getProductByIDRepo(id);
    
    if(!product) {
        throw new Error(`Item tidak ditemukan`);
    };

    return product;
};

export const addProductUsecase = async (title, price, url, image) => {

    if(!title|| !price || !url || !image){
        throw new Error(`Body tidak lengkap!`);
    };

    try {

        const upload = await cloudinary.uploader.upload(image.path);

        return addProductRepo(title, price, url, upload.secure_url);

    } catch(err ) {

        throw new Error(err.message);
    };

};

export const updateProductUsecase = async (id, title, price, url, image) => {

    if(!title && !price && !image) {
        throw new Error(`Masukkan Body untuk Update!`);
    };

    if(!image) {
        return updateProductRepo(id, title, price, url);
    };
    
    const upload = await cloudinary.uploader.upload(image.path);

    return updateProductRepo(id, title, price, url, upload.secure_url);

};

export const deleteProductUsecase = (id) => {

    if(!id) {
        throw new Error(`Please Input a valid Id`);
    };

    return deleteProductRepo(id);

}