const Message = require('../models/messageModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

exports.messages_list = asyncHandler(async (req, res, next) => {
    const allMessages = await Message.find().populate('sender').populate('recipient').exec();

    res.render('messages_list', {
        title: 'Contact List',
        content: 'contacts',
        messages_list: allMessages,
        user: res.locals.currentUser
    });
});
