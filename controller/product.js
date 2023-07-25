import {
    getProductsUsecase,
    getProductByIDUsecase,
    addProductUsecase,
    updateProductUsecase,
    deleteProductUsecase
} from '../usecases/product.js';

export const getProduct = async (req, res) => {

    try {
        
        const products = await getProductsUsecase();

        res.json({
            data : products
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        })
    }
};

export const getProductByID = async (req, res) => {

    try {

        const product = await getProductByIDUsecase(id);

        res.json({
            data : product
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        })
    };
};

export const addProduct = async (req, res) => {

    try {
        const {videoId, title, price, image} = req.body;

        const response = await addProductUsecase(videoId, title, price, image); 

        res.json({
            data : response,
        });
    } catch(err ){

        res.status(500).json({
            error : err.message,
        })
    };
};

export const updateProduct = async (req, res) => {

    try {
        const {videoId, title, price, image} = req.body;

        const result = await updateProductUsecase(videoId, title, price, image);

        res.json({
            updatedItem : result,
        });
    } catch (err) {

        res.status(500).json({
            error : err.message
        });
    };
};

export const deleteProduct = async (req, res) => {

    try {

        const {id} = req.params;

        const deleted = await deleteProductUsecase(id);

        res.json({
            deletedItems :  deleted,
        });
    } catch(err) {

        res.status(500).json({
            error : err.message,
        })
    }
}