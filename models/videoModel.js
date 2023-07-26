import mongoose from "mongoose";
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title : {
        required : true,
        type: String,
    }, 
    products : [
        {
            productId : {type : Schema.Types.ObjectId, ref : "Products" },
            _id : false
        }
    ],
    comments : [
        {
            commentId : { type : Schema.Types.ObjectId, ref : "Comments" },
            _id : false
        }
    ],
    thumb : {
        type : String
    },
    url : {
        required : true,
        type: String
    },
    createdAt : {
        required : true,
        type : Date
    }
});

export const Video = mongoose.model('Video', videoSchema);