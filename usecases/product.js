import {
    getProductsRepo,
    getProductByIDRepo,
    addProductRepo,
    updateProductRepo,
    deleteProductRepo,
} from '../repo/products/product.js';

import {v2 as cloudinary} from 'cloudinary';

export const getProductsUsecase = () => {

    return getProductsRepo();

};

export const getProductByIDUsecase = async (id) => {

    const product = await getProductByIDRepo(id);
    
    if(!product) {
        throw new Error(`Item not Found`);
    };

    return product;
};

export const addProductUsecase = async (title, price, url, image) => {

    if(!title|| !price || !url || !image){
        throw new Error(`Incomplete Body!`);
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