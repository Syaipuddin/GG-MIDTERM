import {
    getCommentsRepo,
    getCommentByIDRepo,
    addCommentRepo,
    updateCommentsRepo,
    deleteCommentRepo
} from '../repo/comments/comment.js';
import { addCommentToVideoRepo, getVideoByIDRepo, updateVideoRepo } from '../repo/videos/video.js';

export const getCommentsUsecase = () => {

    return getCommentsRepo();

};

export const getCommentByIDUsecase = (id) => {

    if(!id) {
        throw new Error(`Invalid ID`);
    };

    return getCommentByIDRepo(id);
};

export const addCommentUsecase = async (videoId, username, comment) => {

    if(!videoId) {
        throw new Error(`Mohon masukkan video id!`);
    } else if (!comment || !username) {
        throw new Error(`Body tidak lengkap!`);
    }

    try {
        // Validation
        await getVideoByIDRepo(videoId);

        const newComment = await addCommentRepo(videoId, username, comment);

        const newCommentId = {
            commentId : newComment._id
        };

        await addCommentToVideoRepo(videoId, newCommentId);


    } catch(err) {

        throw new Error(err.message);

    };
};

export const updateCommentUsecase = async (id, username, comment) => {

    if(!id) {
        throw new Error(`Mohon masukkan ID yang valid`);
    } else if (!username && !comment) {
        throw new Error(`Body tidak lengkap!`);
    };

    try {

        return updateCommentsRepo(id, username, comment);

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