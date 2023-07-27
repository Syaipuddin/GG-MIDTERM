# Generasi Gigih MID-TERM API Project

## How to Run

1. Make sure you have Node JS installed (v19.7.0 recommended).
2. Clone this Repo.
3. install the packages with `npm install` or `yarn install`.
4. run using `npm start` or simply just `yarn start`.
5. Check the Docs Below and Enjoy!

## API Documentation

The Documentation can be accessed [Here](https://gist.github.com/Syaipuddin/6d74588ce2127e73674148c3b412c4b3)

## Database Structure

![ERD](./md-images/ERD-MIDTERM-GG.png)

The Image above shows relation between Video with Products and Comments, each Video may have many Products and Comments, but Each Product and Comment may only Have One Video integrated.

## API Structure

### Videos

**GET /videos**

![getVideos](./md-images/API%20STRUCTURE/video/getVideos.png)

return all videos

**GET /video/:id**

![getVideoById](./md-images/API%20STRUCTURE/video/getVideoById.png)

Get video by ID, Populate Products, and Comments key then returns it.

**POST /video/add**

![addVideo](./md-images/API%20STRUCTURE/video/addVideo.png)

Adding Video to Database, but validate the body first.

**PATCH /video/add-product/:videoId/:productId**

![addProduct2Video](./md-images/API%20STRUCTURE/video/addProduct2Video.png)

Adding single Product._id to `video.products`

**PATCH /video/update/:id**

![updateVideo](./md-images/API%20STRUCTURE/video/updateVideo.png)

Update Single Video Document, but Validate First

**DELETE /video/delete-product/:videoId/:productId**

![deleteProductFromVideo](./md-images/API%20STRUCTURE/video/deleteProductFromVideo.png)

Delete Single Product Id from `video.products`

**DELETE /video/delete/:id**

![deleteVideo](./md-images/API%20STRUCTURE/video/deleteVideo.png)

Delete Single Video from Database based on it's id

### Products

**GET /products**

![getProducts](./md-images//API%20STRUCTURE/product/getProducts.png)

Returns all Producst

**GET /product/:id**

![getProductById](./md-images/API%20STRUCTURE/product/getProductById.png)

Return a Single Product

**POST /product/add**

![addProduct](./md-images/API%20STRUCTURE/product/addProduct.png)

Validating Product Body, and Post it to Database

**PATCH /product/update/:id**

![updateProduct](./md-images/API%20STRUCTURE/product/updateProduct.png)

Validating Product ID, finds and updates it

**DELETE /product/delete/:id**

![deleteProduct](./md-images//API%20STRUCTURE/product/deleteProduct.png)

Delete a Single productId from videos (if exist) and Delete the Product, or just delete the Product


### Comments

**GET /comments**

![getComments](./md-images/API%20STRUCTURE/comment/getComments.png)

Return all Comments From Database

**GET /comment/:id**

![getCommentsById](./md-images/API%20STRUCTURE/comment/getCommentById.png)

Return single Document based on its Id.

**POST /comment/add**

![addComment](./md-images/API%20STRUCTURE/comment/addComment.png)

Create a single Comment and push its id to a `video.comments`

**PATCH /comment/update/:id**

![updateComment](./md-images/API%20STRUCTURE/comment/updateComment.png)

Update single Comment based on its id

**DELETE /comment/delete/:id**

![deleteComment](./md-images/API%20STRUCTURE/comment/deleteComment.png)

Delete a single Comment from database based on its Id and delete its id from `video.comments`