import express from 'express';
const router = express.Router();

import multer from 'multer';

const upload = multer({dest : '/tmp'});

import {
    getVideos, getVideoByID, addProductToVideo,  addVideo, updateVideo, deleteVideo, deleteProductFromVideo 
} from '../controller/video.js';

import {
    getProducts, getProductByID, addProduct, updateProduct, deleteProduct
} from '../controller/product.js';

import {
    getComments, getCommentByID, addComment, updateComment, deleteComment
} from '../controller/comment.js';

// VIDEO
router.get('/api/videos', getVideos);
router.get('/api/video/:id', getVideoByID);

router.post('/api/video/add', addVideo);

router.patch('/api/video/add-product/:videoId/:productId', addProductToVideo);
router.patch('/api/video/update/:id', updateVideo);

router.delete('/api/video/delete/:id', deleteVideo);
router.delete('/api/video/delete-product/:videoId/:productId', deleteProductFromVideo);

// PRODUCT
router.get('/api/products', getProducts);
router.get('/api/product/:id', getProductByID);

router.post('/api/product/add', upload.single('image'), addProduct);

router.patch('/api/product/update/:id', upload.single('image'), updateProduct);

router.delete('/api/product/delete/:id', deleteProduct);

// COMMENT
router.get('/api/comments', getComments);
router.get('/api/comment/:id', getCommentByID);

router.post('/api/comment/add', addComment);

router.patch('/api/comment/update/:id', updateComment);

router.delete('/api/comment/delete/:id', deleteComment);

export default router;