const mongoose = require('mongoose');

const ResearchPaymentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    depositedAmount : {
        type: Number,
        required: true
    },
    depositedDate: {
        type: Date,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    paymentSlip: {
        type: String,
        required: true
    },
    research: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'research'
    }]
});

module.exports = mongoose.model('researchpayments', ResearchPaymentSchema);