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
            mesage : `Berhasil menambahkan Comment`
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
            message : `item dengan id ${id} telah diupdate`,
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
            message : `Item dengan id ${id} telah dihapus`
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        })
    }
}