const Item = require('../models/eventR.model');             // Require the database structre

//Create Item by getting details --------

const createItem = async (req, res) => {
    if (req.body) {
        const item = new Item({
            name: req.body.name,
            code: req.body.code,
            description: req.body.description,
            sentence: req.body.sentence,
            person: req.body.person,
            referances: req.body.proposals
        });
        item.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


// Get all eventr -------------
const getAllItem = async (req, res) => {
    await Item.find({})
        .populate('proposals', 'name description pdf')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}


// Get all subjects for particular course-------------
const getReferancesForEvent = async (req, res) => {
    if (req.params && req.params.id) {
        await Item.findById(req.params.id)
            .populate('proposals', 'name description pdf')
            .then(data => {
                res.status(200).send({ data: data.referances });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


// Calculate Total Amount of courses -------------
const getDetailsForEvent = async (req, res) => {
    if (req.params && req.params.id) {
        const item = await Item.findById(req.params.id)
            .populate('proposals', 'name description pdf')

        const description = item.description;
        const name = item.name;
        const code = item.code;
        const person = item.person;
        res.status(200).send({ description: description,name: name,code: code,person: person });
    }
}


module.exports = {
    createItem,
    getAllItem,
    getReferancesForEvent,
    getDetailsForEvent
};

