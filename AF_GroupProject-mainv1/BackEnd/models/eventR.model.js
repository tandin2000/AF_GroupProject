const mongoose = require('mongoose');  //Call mongoose Database

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    sentence: { type: String, required: true, trim: true },
    person: { type: String, required: true, trim: true },
    referances: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'proposals' }]
});

const Item = mongoose.model('items', ItemSchema); //Create DB store type
module.exports = Item;



