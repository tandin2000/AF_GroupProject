const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventR.controller');

module.exports = function () {
    router.post('/createEvent', controller.createItem);
    router.get('/', controller.getAllItem);
    router.get('/:id', controller.getReferancesForEvent);
    router.get('/details/:id', controller.getDetailsForEvent);
    return router;
}

