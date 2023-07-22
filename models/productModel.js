import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId : {
        required : true,
        type : Number
    },
    title : {
        required : true,
        type : String
    },
    price : {
        required : true,
        type : String
    },
    url : {
        required : true,
        type : String
    },
    createdAt : {
        required : true,
        type : Date
    }
});

export const Product = mongoose.model('Product', productSchema);