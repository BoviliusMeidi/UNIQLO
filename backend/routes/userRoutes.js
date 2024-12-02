const express = require('express');
const { registerUser, loginUser, getUser, logoutUser, editUser, eraseUser, uploadProfilePicture } = require('../controllers/userController');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const router = express.Router();

// users
router.get('/user', getUser);
router.put('/user', editUser);
router.post('/users', registerUser);
router.post('/login', loginUser);
router.post('/user/upload', uploadMiddleware.single('image'), uploadProfilePicture);
router.delete('/user', eraseUser);
router.delete('/logout', logoutUser);

module.exports = router;