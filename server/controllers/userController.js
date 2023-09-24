const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

exports.sign_up_post = asyncHandler(async(req, res, next) => {
    try {
        let password = req.body.password;

        bcrypt.hash(password, 10, async(err, hashedPassword) => {
            if (err) {
                return;
            } else {
                const user = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    password: hashedPassword
                });

                await user.save();
            }
        });
    } catch (err) {
        console.log(err);
        return next(err);
    }
});

// exports.login_post = passport.authenticate('local', {
//     successRedirect: '/messages_list',
//     failureRedirect: '/'
// });
