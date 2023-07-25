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

        const result = await addCommentUsecase(videoId, username, comment);

        res.json({
            data : updated
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

        const updated = await updateCommentUsecase(username, comment);

        res.json({
            updateditem : updated,
        });
    } catch(err) {

        res.status(500).json({
            error : err.message,
        })
    }
}