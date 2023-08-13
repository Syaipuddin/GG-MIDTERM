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
    try {

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
    } catch(err) {

        throw new Error(`Video Not Found!`)
    }
    

};

export const getVideoByIDUsecase = async (id) => {

    if(!id) {
        throw new Error(`Invalid ID!`);
    }
    
    try {

        const video =  await getVideoByIDRepo(id);

        if(!video){
            throw new Error(`Video not Found`);
        }

        return video;

    } catch(err) {
        
        throw new Error(err.message);
    }
    
}

export const addVideoUsecase = (title, url) => {

    if(!title || !url) {
        throw new Error(`Invalid title or Url!`);
    };

    const ytUrl = url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/);

    // LINK VALIDATION
    if(!ytUrl) {
        throw new Error(`URL Must be Youtube Link!`)
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
        throw new Error(`Invalid ID!`);
    } else if (!title && !url) {
        throw new Error(`Incomplete Body!`);
    }

  
    if(url) {
        const ytUrl = url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/);

        if(!ytUrl) {
            throw new Error(`URL Must be Youtube Link!`);
        }

         return updateVideoRepo(id, title, url);

    } else {
          // IF NO URL STRAIGHT TO UPDATE
        return updateVideoRepo(id, title);
    }

    

};

export const deleteVideoUsecase = (id) => {
    
    if(!id) {
        throw new Error(`Invalid ID!`);
    }

    return deleteVideoRepo(id)
}

