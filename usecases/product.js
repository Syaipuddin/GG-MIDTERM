import {
    getProductsRepo,
    getProductByIDRepo,
    addProductRepo,
    updateProductRepo,
    deleteProductRepo,
} from '../repo/products/product.js';
import { getVideoByIDRepo } from '../repo/videos/video.js';

export const getProductUsecase = () => {

    return getProductsRepo();

};

export const getProductByIDUsecase = (id) => {

    return getProductByIDRepo(id);

};

export const addProductUsecase = async (body) => {

    if(!body.title || !body.url ||  !body.file) {
        throw new Error(`Body tidak valid!`)
    };

    try {
        // validation
        await getVideoByIDRepo(body.videoId);

        return addProductRepo(body);

    } catch(err ) {

        throw new Error(err.message);
    };

};

export const updateProductUsecase = (id, body) => {

    if(!body.videoId || !body.title || !body.url ||  !body.file) {
        throw new Error(`Masukkan Body untuk Update!`);
    };

    return updateProductRepo(id, body);

};

export const deleteProductUsecase = (id) => {

    if(!id) {
        throw new Error(`Please Input a valid Id`);
    };

    return deleteProductRepo(id);

}