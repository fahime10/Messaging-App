const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, minLength: 1, required: true },
    lastName: { type: String },
    username: { type: String, minLength: 1, maxLength: 20, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
