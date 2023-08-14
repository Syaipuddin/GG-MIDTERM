import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    videoId : {
        type : String
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
    image : {
        required : true,
        type : String
    },
    description : {
        required : true,
        type : String
    },
    createdAt : {
        required : true,
        type : Date
    }
});

export const Product = mongoose.model('Products', productSchema);