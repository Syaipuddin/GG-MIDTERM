import {
    getVideosUsecase,
    getVideoByIDUsecase,
    addVideoUsecase,
    updateVideoUsecase,
    deleteVideoUsecase
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
        const {id} = req.params.id;
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
        const video = await addVideoUsecase(req.body);

        res.status(201).json({
            data : video,
        });
    } catch (err) {

        res.status(500).json({
            error : err.message,
        })
    }
};

export const updateVideo = async (req, res) => {

    try {
        const {id} = req.params;
        const updated = await updateVideoUsecase(id. req.body);

        res.json({
            data : update,
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
        const deleted = await deleteVideoUsecase(id);

        res.json({
            deletedItem : deleted
        });
    } catch(err) {

        res.status(500).json({
            error : err.mesage,
        });
    };
};
