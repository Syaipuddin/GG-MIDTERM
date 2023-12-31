import {
    getVideosUsecase,
    getVideoByIDUsecase,
    addVideoUsecase,
    addProductToVideoUsecase,
    updateVideoUsecase,
    deleteVideoUsecase,
    deleteProductFromVideoUsecase
} from '../usecases/video.js';

export const getVideos  =  async(req, res) => {

    try {

        const videos = await getVideosUsecase();

        res.json({
            data : videos,
        });

    } catch(err) {

        res.status(500).json({
            error : err.message,
        });
    };
};

export const getVideoByID = async (req, res) => {

    try {
        const {id} = req.params;
        const video = await getVideoByIDUsecase(id);

        res.json({
            data : video,
        });

    } catch(err) {

        res.status(500).json({
            err: err.message
        });
    };
};

export const addVideo = async (req, res) => {

    try {
        const { title, url } = req.body;

        const video = await addVideoUsecase(title, url);

        res.status(201).json({
            data : video,
        });
    } catch (err) {

        res.status(500).json({
            error : err.message,
        })
    }
};

export const addProductToVideo = async (req, res) => {

    try {
        const {videoId, productId} = req.params;

        await addProductToVideoUsecase(videoId, productId);

        res.status(201).json({
            message : `Successfully adding item ${productId} to Video ${videoId}`
        });
    } catch(err) {

        res.status(500).json({
            error : err.message
        });
    };
};

export const deleteProductFromVideo = async (req, res) => {

    try {

        const {videoId, productId} = req.params;
        await deleteProductFromVideoUsecase(videoId, productId);

        res.status(201).json({
            message : `Successfully deleted item ${productId} from video ${videoId}`
        });

    } catch(err) {

        res.status(500).json({
            error : err.message
        })
    }
}

export const updateVideo = async (req, res) => {

    try {
        const {id} = req.params;
        const {title, url} = req.body;

        await updateVideoUsecase(id, title, url);

        res.status(201).json({
            message : `updated item with id ${id}`,
        });

    } catch(err) {
        res.status(500).json({
            error : err.message
        });

    };
};

export const deleteVideo = async (req, res) => {

    try {
        const {id} = req.params;
        
        await deleteVideoUsecase(id);

        res.json({
            message : `deleted item with id ${id}`
        });
    } catch(err) {

        res.status(500).json({
            error : err.mesage,
        });
    };
};
