const mongoose = require('mongoose');  //Call mongoose Database

const TemplateTesSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    link : { type: String, required: true },
    description: { type: String, required: true, trim: true },
}); //Create DB store type

const TemplateTes = mongoose.model('templateTes', TemplateTesSchema); //Create DB store type
module.exports = TemplateTes;