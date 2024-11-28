const express = require('express');
const { registerUser, loginUser, getUser,listUsers, logoutUser, editUser, eraseUser, uploadProfilePicture } = require('../controllers/userController');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const router = express.Router();

router.get('/user', getUser);
router.put('/user', editUser);
router.delete('/user', eraseUser);
router.get('/users', listUsers);
router.post('/users', registerUser);
router.post('/login', loginUser);
router.delete('/logout', logoutUser);
router.post('/user/upload', uploadMiddleware.single('image'), uploadProfilePicture);

module.exports = router;