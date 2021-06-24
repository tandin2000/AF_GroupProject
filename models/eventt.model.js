const mongoose = require('mongoose');

const EventtSchema = new mongoose.Schema({
    Time: {
        type: String,
        required: true,
        trim: true
    },
    Link: {
        type: String,
        required: true,
        trim: true
    },
    researchpapers: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'researchpapers'
    }]
});

const Eventt = mongoose.model('eventts', EventtSchema);
module.exports = Eventt;