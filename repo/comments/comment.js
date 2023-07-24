import { Comment } from "../../models/commentModel";

export const addCommentRepo = async (body) => {

    try {

        const newComment = new Comment({
            videoId : body.videoId,
            userId : body.userId,
            comment : body.comment,
            createdAt : Date.now()
        })

        await newComment.save();
        return newComment;

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

export const updateCommentsRepo = async (id) => {

    try {

        await Comment.findByIdAndDelete(id);
        return true;

    } catch (err) {

        throw new Error(err.message);
    };
};


export const deleteCommentRepo = async (id) => {

    try {

        const del = await Comment.findByIdAndDelete(id);

        return del;
        
    } catch(err) {
        throw new Error(`Failed to Delete Comment = ${err.message}`);
    }
}