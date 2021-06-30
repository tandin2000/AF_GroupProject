const mongoose = require('mongoose');

const ResearchSchema = new mongoose.Schema ({
        researcherName: {
            type: String,
            required: true,
            trim: true
        },
        researcherContactNo: {
            type: String,
            required: true,
            trim: true
        },
        researcherEmail: {
            type: String,
            required: true
        },
        researchTitle: {
            type: String,
            required: true
        },
        description : {
            type: String,
            required: true,
            trim: true
        },
        researchURL: {
            type: String,
            required: true
        },
        paymentAmount: {
            type: Number,
            required: false
        },
    });

module.exports = mongoose.model('researches', ResearchSchema);

