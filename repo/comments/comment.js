import { Comment } from "../../models/commentModel.js";
import { deleteCommentsFromVideoRepo } from "../videos/video.js";

export const addCommentRepo = async (videoId, username, comment) => {

    try {

        const newComment = new Comment({
            videoId : videoId,
            username : username,
            comment : comment,
            createdAt : Date.now()
        })

        const saved = await newComment.save();
        return saved;

    } catch(err) {

        throw new Error(err.message);

    };
};

export const getCommentsRepo = async (productId) => {

    try {

        const comments = await Comment.find(productId);

        return comments;

    } catch (err) {

        throw new Error(err.message);

    };
};

export const getCommentByIDRepo = async (id) => {

    try {

        const comment = await Comment.findById(id);

        return comment;

    } catch (err) {

        throw new Error(err.message);
    };

};

export const updateCommentsRepo = async (id, username, comment) => {

    try {

        const updated = await Comment.findByIdAndUpdate(id, {
            username : username,
            comment : comment
        });

        return updated;

    } catch (err) {

        throw new Error(err.message);
    };
};


export const deleteCommentRepo = async (id) => {

    try {
        const comment = await getCommentByIDRepo(id);

        // DELETE THE ID FROM VIDEOS
        await deleteCommentsFromVideoRepo(comment.videoId, id);

        await Comment.findByIdAndDelete(id);
        
    } catch(err) {
        throw new Error(`Failed to Delete Comment = ${err.message}`);
    }
}