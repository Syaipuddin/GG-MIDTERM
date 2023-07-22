import mongoose from "mongoose";
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    videoId : {
        required: true,
        type: Number
    },
    title : {
        required : true,
        type: String
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