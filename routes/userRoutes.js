const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.get('/profile', auth, getUser);

module.exports = router;
