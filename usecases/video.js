import {
    getVideosRepo,
    getVideoByIDRepo,
    addVideoRepo,
    updateVideoRepo,
    deleteVideoRepo,
} from '../repo/videos/video.js';

export const getVideosRepo = () => {

    return getVideosRepo();

};

export const getVideoByIDUsecase = (id) => {

    if(!id) {
        throw new Error(`ID tidak Valid!`);
    }
    return getVideoByIDRepo(id);
}

export const addVideoUsecase = (title, url) => {

    if(!title || !url) {
        throw new Error(`Title dan Url tidak Valid!`);
    };

    return addVideoRepo(title, url);
};

export const updateVideoUsecase = (id, title, url) => {

    if(!id) {
        throw new Error(`Mohon Masukkan ID!`)
    } else if (!title || !url) {
        throw new Error(`Body Tidak Lengkap!`)
    }

    return updateVideoRepo(id, title, url);

};

export const deleteVideoUsecase = (id) => {
    
    if(!id) {
        throw new Error(`ID tidak Valid!`);
    }

    return deleteVideoRepo(id)
}

