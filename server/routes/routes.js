const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/indexController');
const user_controller = require('../controllers/userController');
const message_controller = require('../controllers/messageController');

router.get('/', index_controller.index);

router.post('/', user_controller.login_post);

router.get('/sign-up', user_controller.sign_up_form_get);

router.post('/sign-up', user_controller.sign_up_form_post);

router.get('/messages_list', message_controller.messages_list);

module.exports = router;
