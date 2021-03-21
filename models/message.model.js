const mongoose = require('mongoose');

//Create Table Messages
const MessageSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    message: String,
    channel: String
});

module.exports = mongoose.model('Message', MessageSchema);
