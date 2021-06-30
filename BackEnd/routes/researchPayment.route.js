const express = require('express');
const router = express.Router();
const controller = require('../controllers/researchPayment.controller');

module.exports = function () {
    //POST ResearchPayment
    router.post('/create', controller.createResearchPayment);
    //GET all ResearchPayment
    router.get('/', controller.getAllResearchPayment);
    //GET ResearchPayment By ID
    router.get('/viewbyid/:id', controller.viewPaymentById);
    //GET Research By ResearchPaymentID
    router.get('/viewbyid/research/:id', controller.viewResearchByPaymentId);
    //DELETE ResearchPayment By ID
    router.delete('/delete/:id', controller.deleteById);

    return router;
}
