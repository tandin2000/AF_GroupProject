const mongoose = require('mongoose');

const ResearchSchema = new mongoose.Schema ({
    researcherName: String,
    researcherContactNo: String,
    researcherEmail: String,
    researchTitle: String,
    description : String,
    proposalURL: String,
    paymentAmount: Number
});

module.exports = mongoose.model('research', ResearchSchema);