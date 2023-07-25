import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    videoId : {
        required : true,
        type : String
    },
    username : {
        required : true,
        type : String
    },
    comment : {
        required : true,
        type : String,
    },
    createdAt : {
        required : true,
        type : Date,
    }
})

export const Comment = mongoose.model('Comments', commentSchema);