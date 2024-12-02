const express = require('express');
const { checkSession } = require('../controllers/sessionController');
const router = express.Router();

router.get('/check-session', checkSession);
module.exports = router;