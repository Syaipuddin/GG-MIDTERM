import { Video } from "../../models/videoModel";

export const addVideoRepo = async (title, url) => {

try {

    const newVideo = new Video({
        videoId : Video.length + 1,
        title : title,
        url : url,
        createdAt : Date.now()
    });

    const video = await newVideo.save();
    return video;

} catch (err) {

    throw new Error(err.message);
};

};


export const getVideosRepo = async () => {

try {

    const videos = await Video.find();

    return videos;

} catch (err) {

    throw new Error(err.message);
};

};

export const getVideoByIDRepo = async (id) => {

    try {

        const video = await Video.findById();

        return video;

    } catch (err) {

        throw new Error(err.message);

    }
}

export const updateVideoRepo = async (id, title, url) => {

    try {

        const updatedVideo = await Video.findByIdAndUpdate(id, {
            title : title,
            url : url,
            
            // didn't include this in model since this is only exists when updatin
            updatedAt : Date.now(),
        });

        return updatedVideo;

    } catch (err) {

        throw new Error(err.message);
    }

}

export const deleteVideoRepo = async (id) => {

    try {

        await Video.findByIdAndDelete(id);

        return true;

    } catch (err) {

        throw new Error(err.message);
    }
}
