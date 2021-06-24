const mongoose = require('mongoose');

const templetSchema = new mongoose.Schema({
    Author: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'users'
    }],
    attachement: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'researchpapers'
    }]
});

const Templet = mongoose.model('templets', templetSchema);
module.exports = Templet;