const express = require('express');
const { registerUser, loginUser, listUsers, checkSession, logoutUser } = require('../controllers/userController');
const router = express.Router();

router.get('/users', listUsers);
router.post('/users', registerUser);
router.post('/login', loginUser);
router.get('/check-session', checkSession);
router.post('/logout', logoutUser);

module.exports = router;
