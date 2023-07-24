import {
    getCommentsRepo,
    getCommentByIDRepo,
    addCommentRepo,
    updateCommentsRepo,
    deleteCommentRepo
} from '../repo/comments/comment.js';
import { getVideoByIDRepo } from '../repo/videos/video.js';

export const getCommentsUsecase = () => {

    return getCommentsRepo();

};

export const getCommentByIDRepo = (id) => {

    if(!id) {
        throw new Error(`Invalid ID`);
    };

    return getCommentByIDRepo(id);
};

export const addCommentRepo = async (body) => {

    if(!body.videoId) {
        throw new Error(`Mohon masukkan video id!`);
    } else if (!body.comment) {
        throw new Error(`Mohon Masukkan Comment`);
    }

    try {
        // Validation
        await getVideoByIDRepo(body.videoId);

        return addCommentRepo(body);
    } catch(err) {

        throw new Error(err.message);

    };
};

export const updateCommentsRepo = async (id, body) => {

    if(!id) {
        throw new Error(`Mohon masukkan ID yang valid`);
    } else if (!body.comment) {
        throw new Error(`Masukkan Comment!`);
    };

    try {
        // Validate
        await getVideoByIDRepo(body.videoId);

        return updateCommentsRepo(id, body);

    } catch(err) {

        throw new Error(err.message);
    };
};

export const deleteCommentUsecase = (id) => {

    if(!id) {
        throw new Error(`Mohon masukkan ID`);
    }

    return deleteCommentRepo(id);
}