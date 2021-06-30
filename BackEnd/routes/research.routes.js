const express = require('express');
const router = express.Router();
const controller = require('../controllers/research.controller');

module.exports = function () {
    //POST WorkShop
    router.post('/create', controller.createResearch);
    //GET all Research
    router.get('/', controller.viewAllResearch);
    //GET Research By ID
    router.get('/viewbyid/:id', controller.viewById);
    //DELETE Research By ID
    router.delete('/delete/:id', controller.deleteById);
    //UPDATE Research By ID
    router.put('/update/:id', controller.updateById);
    return router;
}