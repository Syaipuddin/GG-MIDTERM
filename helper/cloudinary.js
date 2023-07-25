import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

export const cldConfig = () => {

    cloudinary.config({

        cloud_name : process.env.CLOUD_NAME,
        api_key : process.env.API_KEY,
        api_secret : process.env.API_SECRET
    
    });

}


export const uploader =  (file) => {

    return cloudinary.uploader.upload(file);
}