import {
    getCommentsUsecase,
    getCommentByIDUsecase,
    addCommentUsecase,
    updateCommentUsecase,
    deleteCommentUsecase
} from '../usecases/comment.js';

export const getComments = async (req, res) => {

    try {

        const comments = await getCommentsUsecase();

        res.json({
            data : comments,
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        });
    };
};

export const getCommentByID = async (req, res) => {

    try {

        const {id} = req.params;

        const comment = await getCommentByIDUsecase(id);

        res.json({
            data : comment
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        });
    };
};

export const addComment = async (req, res) => {

    try {

        const {videoId, username, comment} = req.body;

        await addCommentUsecase(videoId, username, comment);

        res.json({
            mesage : `Successfully adding Comment`
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        });
    };
};

export const updateComment = async (req, res) => {

    try {
        const {id} = req.params;
        const {username, comment} = req.body;

        await updateCommentUsecase(id, username, comment);

        res.json({
            message : `item with id ${id} has updated`,
        });

    } catch(err) {

        res.status(500).json({
            error : err.message,
        });
    };
};

export const deleteComment = async (req, res) => {

    try {

        const {id} = req.params;
        
        await deleteCommentUsecase(id);

        res.json({
            message : `Item with id ${id} has deleted`
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        })
    }
}