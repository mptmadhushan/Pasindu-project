const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
    },
    Date: {
        type: Date,
        default: Date.now(),
    },
},
    {
        timestamps: true
    }
);

module.exports = User = mongoose.model('user', UserSchema);