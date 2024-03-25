var express = require('express');
const { createPost, updatePost, readPost, deletePost, updateLikedPost } = require('../../controller/post_controller');
var router = express.Router();

/* GET home page. */
router.post('/create', createPost);
router.post('/update', updatePost);
router.get('/read', readPost);
router.delete('/delete', deletePost);
router.post('/updateLiked', updateLikedPost);

module.exports = router;