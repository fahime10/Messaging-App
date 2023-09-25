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

exports.login_post = asyncHandler(async(req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            res.send({ error: 'Incorrect details' });
        }

        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) {
            res.send({ error: 'Incorrect details' });
        }
        
        res.send(user);

    } catch (err) {
        console.log(err);
    }
});