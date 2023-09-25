const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');
const message_controller = require('../controllers/messageController');

router.post('/sign-up', user_controller.sign_up_post);

router.post('/login', user_controller.login_post);

module.exports = router;
