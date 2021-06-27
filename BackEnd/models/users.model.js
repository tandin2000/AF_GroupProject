const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    eventt: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'eventts'
    }]
}, { timestamps: true });

const Users = mongoose.model('users', UserSchema);
module.exports = Users;