import { Product } from "../../models/productModel";

export const addProductRepo = async (body) => {

    try {

        const newProduct = new Product({
            productId : Product.length + 1,
            videoId : body.videoId,
            title : body.title,
            price : body.price,
            url : body.url,
            createdAt : Date.now()
        });

        await newProduct.save();
        return true;

    } catch (err) {

        throw new Error(err.mesage);

    };
};

export const getProductRepo = async () => {

    try {

        const products = await Product.find();

        return products;

    } catch (err) {

        throw new Error(err.message);

    };
};

export const getProductByIDRepo = async (id) => {

    try {

        const product = await Product.findById(id);

        return product;

    } catch (err) {

        throw new Error(err.mesage);

    };
};

export const updateProductRepo = async (id, body) => {

    try {

        const updatedProduct = {
            videoId : videoId || body.videoId,
            title : title || body.title,
            price : price || body.price,
            url : url || body.url,

            // didn't include this in models since this only exists when updating
            updatedAt : Date.now()
        }

        await Product.findByIdAndUpdate(id, updatedProduct)
        return updatedProduct;

    } catch(err) {

        throw new Error(err.messafe);

    };
};

export const deleteProductRepo = async (id) => {

    try {

        await Product.findByIdAndDelete(id);
        return true;

    } catch (err) {

        throw new Error(err.message);

    }
}