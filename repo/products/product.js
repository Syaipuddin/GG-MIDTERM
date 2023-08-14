import { Product } from "../../models/productModel.js";
import { deleteProductFromVideoRepo } from "../videos/video.js";

export const addProductRepo = async (title, price, url, description, image) => {

    try {

        const newProduct = new Product({
            title : title,
            price : price,
            url : url,
            description : description,
            image : image,
            createdAt : Date.now()
        });

        const product = await newProduct.save();
        return product;

    } catch (err) {

        throw new Error(`Failed to add Product = ${err.mesage}`);

    };
};

export const getProductsRepo = async () => {

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

        throw new Error(`Product Not Found!`);

    };
};

export const updateProductRepo = async (id, title, price, url, image) => {

    try {
        
        await Product.findByIdAndUpdate({_id : id}, {
            title : title,
            price : price,
            url : url,
            image : image,
            updatedAt : Date.now()
        });

    } catch(err) {

        throw new Error(`Failed to Update Products ${err.message}`);

    };
};

export const deleteProductRepo = async (id) => {

    try {

        const product = await getProductByIDRepo(id);

        await deleteProductFromVideoRepo(product.videoId, id);

        await Product.findByIdAndDelete(id);

    } catch (err) {

        throw new Error(err.message);

    };
};

export const deleteVideoIDFromProduct = async (videoId, productId) => {
    
    try {

        await Product.findByIdAndUpdate(productId, {
            $unset : {videoId : 1}
        });

    } catch(err) {

        throw new Error(`Failed to delete videoId from product = ${err.message}`);
    }
}
