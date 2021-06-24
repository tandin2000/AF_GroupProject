const express = require('express');
const router = express.Router();
const controller = require('../controllers/ResearchPaper.controller');

module.exports = function () {
    router.post('/createRP', controller.createRP);
    return router;
}