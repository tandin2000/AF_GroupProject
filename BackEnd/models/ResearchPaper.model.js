const mongoose = require('mongoose');

const ResearchPaperSchema = new mongoose.Schema({
    // name: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false,
    //     ref: 'users'
    // }],
    title: {
        type: String,
        required: true,
        trim: true
    },
    shortdescription: {
        type: String,
        required: true,
        trim: true
    },
    // attachement: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    like: {
        type: Number,
        requred: false
    }
}, { timestamps: true });

const ResearchPaper = mongoose.model('researchpapers', ResearchPaperSchema);
module.exports = ResearchPaper;