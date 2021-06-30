const express = require('express');
const router = express.Router();
const controller = require('../controllers/TrmplateTes.controller');

module.exports = function () {
    router.post('/createTemplateTes', controller.CreateTemplateTes);  //Used At Main Page creation
    router.get('/GetAllTemplateTes', controller.getAllTemplateTes);
    router.get('/DownloadSpecificTemplateTes/:id', controller.DownloadSpecificTemplateTes);
    router.post('/GetSpecificTemplateTes/:id', controller.getSpecificTemplateTes);
    return router;
}