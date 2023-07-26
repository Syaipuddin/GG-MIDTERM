import { Video } from "../../models/videoModel.js";
import { Product } from '../../models/productModel.js';

export const addVideoRepo = async (title, url) => {

try {

    const newVideo = new Video({
        title : title,
        url : url,
        createdAt : Date.now()
    });

    const video = await newVideo.save();
    return video;

} catch (err) {

    throw new Error(`Failed to add Video ${err.message}`);
};

};

export const addProductToVideoRepo = async (videoId, productId) => {

    try {

        await Video.findByIdAndUpdate(videoId, {
            $push : {products : {productId : productId}}
        });

        await Product.findByIdAndUpdate(productId, {
            videoId : videoId
        });

    } catch (err) {

        throw new Error(`Failed to add Product to Video = ${err.message}`);
    }
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

        // POPULATE COMMENTS AND PRODUCTS WHEN GETTING VIDEO DETAIL
        const video = await Video.findById(id)
            .populate([{path : 'products', populate : { path : 'productId'}, model :'Products'}])
                .populate([{path : 'comments', populate : { path : 'commentId'}, model : "Comments"}]).exec();

        return video;

    } catch (err) {

        throw new Error(`Video Not Found = ${err.message}`);

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

        throw new Error(`Failed to Update Video = ${err.message}`);
    };

};

export const addCommentToVideoRepo = async (videoId, commentId) => {

    try {
        
        await Video.findByIdAndUpdate(videoId, {
            $push: {comments : commentId}
        });

    } catch(err) {

        throw new Error(`Failed to add Comment to Video = ${err.message}`);
    }
}

export const deleteVideoRepo = async (id) => {

    try {

        await Video.findByIdAndDelete(id);

    } catch (err) {

        throw new Error(err.message);
    };
};

export const deleteProductFromVideoRepo = async (videoId, productId) => {

    try {
        await Video.findByIdAndUpdate(videoId, {
            $pull : {
                products : {productId : productId}
            }
        });

    } catch (err) {
        throw new Error(`failed to delete Product from Video = ${err.message}`);
    };
};

export const deleteCommentsFromVideoRepo = async (videoId, commentId) => {

    try {

        await Video.findByIdAndUpdate(videoId, {
            $pull : {
                comments : {commentId : commentId}
            }
        });

    } catch(err) {

        throw new Error(`Failed to Delete Comment from Video = ${err.message}`);
    }
}

