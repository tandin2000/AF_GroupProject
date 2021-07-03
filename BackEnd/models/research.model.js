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
        status: {
            type: String,
            default: "not approved",
            required: true
        },
    });

module.exports = mongoose.model('researches', ResearchSchema);

