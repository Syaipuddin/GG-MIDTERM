import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment : {
        required : true,
        type : String,
    },
    createdAt : {
        required : true,
        type : Date,
    }
})

export const Comment = mongoose.model('Comment', commentSchema);