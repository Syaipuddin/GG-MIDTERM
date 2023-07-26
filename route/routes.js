import express from 'express';
const router = express.Router();

import multer from 'multer';

const upload = multer({dest : './uploads/image'});

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
router.get('/videos', getVideos);
router.get('/video/:id', getVideoByID);

router.post('/video/add', addVideo);

router.patch('/video/add-product/:videoId/:productId', addProductToVideo);
router.patch('/video/update/:id', updateVideo);

router.delete('/video/delete/:id', deleteVideo);
router.delete('/video/delete-product/:videoId/:productId', deleteProductFromVideo);

// PRODUCT
router.get('/products', getProducts);
router.get('/product/:id', getProductByID);

router.post('/product/add', upload.single('image'), addProduct);

router.patch('/product/update/:id', upload.single('image'), updateProduct);

router.delete('/product/delete/:id', deleteProduct);

// COMMENT
router.get('/comments', getComments);
router.get('/comment/:id', getCommentByID);

router.post('/comment/add', addComment);

router.patch('/comment/update/:id', updateComment);

router.delete('/comment/delete/:id', deleteComment);

export default router;