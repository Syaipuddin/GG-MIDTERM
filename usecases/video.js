import { deleteVideoIDFromProduct } from '../repo/products/product.js';
import {
    getVideosRepo,
    getVideoByIDRepo,
    addVideoRepo,
    updateVideoRepo,
    deleteVideoRepo,
    addProductToVideoRepo,
    deleteProductFromVideoRepo
} from '../repo/videos/video.js';

export const getVideosUsecase = async () => {

    const videos = await getVideosRepo();

    videos.map((e) => 
        { 
            // EXTRACT ID FROM YT LINKS
            const match = e.url.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);
            // IF THE MATCH LENGT 7 RETURN THE RESULT
            const matchId =  (match&&match[7]) ? match[7] : (()=> {throw new Error(`Video ID not found`)});
            const ytId = `https://img.youtube.com/vi/${matchId}/0.jpg`;

            return e.thumb = ytId;
        });

    return videos;

};

export const getVideoByIDUsecase = async (id) => {

    if(!id) {
        throw new Error(`ID tidak Valid!`);
    }
    
    try {

        const video =  await getVideoByIDRepo(id);

        if(!video){
            throw new Error(`Video tidak ditemukan`);
        }

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

export const addProductToVideoUsecase = (videoId, productId) => {

    return addProductToVideoRepo(videoId, productId);

};

export const deleteProductFromVideoUsecase = async (videoId, productId) => {

    await deleteProductFromVideoRepo(videoId, productId);
    await deleteVideoIDFromProduct(videoId, productId);

}

export const updateVideoUsecase = (id, title, url) => {

    if(!id) {
        throw new Error(`Mohon Masukkan ID!`)
    } else if (!title && !url) {
        throw new Error(`Body Tidak Lengkap!`)
    }

  
    if(url) {
        const ytUrl = url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/);

        if(!ytUrl) {
            throw new Error(`URL harus menuju Ke Youtube!`)
        }

         return updateVideoRepo(id, title, url);

    } else {
          // IF NO URL STRAIGHT TO UPDATE
        return updateVideoRepo(id, title);
    }

    

};

export const deleteVideoUsecase = (id) => {
    
    if(!id) {
        throw new Error(`ID tidak Valid!`);
    }

    return deleteVideoRepo(id)
}

