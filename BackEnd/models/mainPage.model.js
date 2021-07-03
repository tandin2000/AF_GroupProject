const mongoose = require('mongoose');  //Call mongoose Database

const MainSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    venue: { type: String, required: true, trim: true },
    time : { type: String, required: true },
    date: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    adminpermission: { type: String, required: false, trim: true }
}); //Create DB store type

const Mainpage = mongoose.model('mainpage', MainSchema); //Create DB store type
module.exports = Mainpage;