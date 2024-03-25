var express = require('express');
const { createComment, updateComment, readComment, deleteComment } = require('../../controller/comment_controller');
var router = express.Router();

/* GET home page. */
router.post('/create', createComment);
router.post('/update', updateComment);
router.get('/read', readComment);
router.delete('/delete', deleteComment);

module.exports = router;