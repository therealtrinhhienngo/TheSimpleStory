var express = require('express');
const { createSavedPost, updateSavedPost, readSavedPost, deleteSavedPost } = require('../../controller/saved_post_controller');
var router = express.Router();

/* GET home page. */
router.post('/create', createSavedPost);
router.post('/update', updateSavedPost);
router.get('/read', readSavedPost);
router.delete('/delete', deleteSavedPost);

module.exports = router;