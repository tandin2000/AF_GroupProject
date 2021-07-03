const express = require('express');
const router = express.Router();
const controller = require('../controllers/MainPage.controller');

module.exports = function () {
    router.post('/create', controller.CreateMainPage);  //Used At Main Page creation
    router.get('/mainForHome', controller.getMainUnderPermission);
    router.get('/mainForEditing', controller.getNormalMain);
    router.post('/updateEventDetails', controller.updateMainDetails);
    return router;
}

