var express = require('express');
const { createUser, updateUser, readUser, deleteUser } = require('../../controller/user_controller');
var router = express.Router();

/* GET home page. */
router.post('/create', createUser);
router.post('/update', updateUser);
router.get('/read', readUser);
router.delete('/delete', deleteUser);

module.exports = router;
