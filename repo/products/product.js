import { Product } from "../../models/productModel";

export const addProductRepo = async (body) => {

    try {

        const newProduct = new Product({
            productId : Product.length + 1,
            videoId :videoId,
            title : title,
            price : price,
            image : image,
            createdAt : Date.now()
        });

        const product = await newProduct.save();
        return product;

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

export const updateProductRepo = async (id, videoId, title, price, url) => {

    try {

        const updatedProduct = {
            videoId : videoId,
            title : title,
            price : price,
            image : url,

            // didn't include this in models since this only exists when updating
            updatedAt : Date.now()
        }

        const product = await Product.findByIdAndUpdate(id, updatedProduct)
        return product;

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