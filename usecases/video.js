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

export const addVideoUsecase = (body) => {

    if(!body.title || !body.url) {
        throw new Error(`Title dan Url tidak Valid!`);
    };

    return addVideoRepo(body);
};

export const updateVideoUsecase = (id, body) => {

    if(!id) {
        throw new Error(`Mohon Masukkan ID!`)
    } else if (!body.title || !body.url) {
        throw new Error(`Body Tidak Lengkap!`)
    }

    return updateVideoRepo(id, body);

};

export const deleteVideoUsecase = (id) => {
    
    if(!id) {
        throw new Error(`ID tidak Valid!`);
    }

    return deleteVideoRepo(id)
}

