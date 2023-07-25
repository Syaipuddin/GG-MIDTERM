import { getProductByIDRepo } from '../repo/products/product.js';
import { getCommentByIDRepo } from '../repo/comments/comment.js';
import {
    getVideosRepo,
    getVideoByIDRepo,
    addVideoRepo,
    updateVideoRepo,
    deleteVideoRepo,
    addProductToVideoRepo
} from '../repo/videos/video.js';

export const getVideosUsecase = () => {

    return getVideosRepo();

};

export const getVideoByIDUsecase = async (id) => {

    if(!id) {
        throw new Error(`ID tidak Valid!`);
    }
    
    try {

        const video =  await getVideoByIDRepo(id);
        const products = video.products.map(  (e)=>   getProductByIDRepo(e.productId));
        const comments = video.comments.map(  (e)=>   getCommentByIDRepo(e.commentId));

        return video;

    } catch(err) {
        
        throw new Error(err.message);
    }
    
}

export const addVideoUsecase = (title, url) => {

    if(!title || !url) {
        throw new Error(`Title atau Url tidak Valid!`);
    };

    const ytUrl = url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/);

    // LINK VALIDATION
    if(!ytUrl) {
        throw new Error(`URL harus menuju ke Youtube!`)
    }

    return addVideoRepo(title, url);
};

export const addProductToVideoUsecase = async (videoId, productId) => {

        return addProductToVideoRepo(videoId, productId);

}

export const updateVideoUsecase = (id, title, url) => {

    if(!id) {
        throw new Error(`Mohon Masukkan ID!`)
    } else if (!title && !url) {
        throw new Error(`Body Tidak Lengkap!`)
    }

    const ytUrl = url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/);

    if(!ytUrl) {
        throw new Error(`URL harus menuju Ke Youtube!`)
    }

    return updateVideoRepo(id, title, url);

};

export const deleteVideoUsecase = (id) => {
    
    if(!id) {
        throw new Error(`ID tidak Valid!`);
    }

    return deleteVideoRepo(id)
}

