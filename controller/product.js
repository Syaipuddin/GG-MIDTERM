import {
    getProductsUsecase,
    getProductByIDUsecase,
    addProductUsecase,
    updateProductUsecase,
    deleteProductUsecase
} from '../usecases/product.js';

export const getProducts = async (req, res) => {

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

        const {id} = req.params;

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

export const addProduct = async (req, res, next) => {

    try {
        const {title, price, url} = req.body;


        const response = await addProductUsecase(title, price, url, req.file.buffer); 

        

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

        const {id} = req.params;

        const {title, price, url} = req.body;

        await updateProductUsecase(id, title, price, url, req.file);

        res.json({
            message : `updated item with id ${id}`,
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

        await deleteProductUsecase(id);

        res.json({
            message :  `deleted item with id ${id}`,
        });
    } catch(err) {

        res.status(500).json({
            error : err.message,
        })
    }
}