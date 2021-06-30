const WorkShop = require('../models/workshop.model');

//Create workshop controller

const createWorkshop = async (req, res) => {
    if(req.body) {
        const workShop = new WorkShop(req.body);
        await workShop.save()
            .then(data=>{
                res.status(200).send({data: data});
            })
            .catch(error =>{
                res.status(500).send({error: error.message});
            });
    }
}

//Get all WorkShop controller

const viewAllWorkshops = async (req, res) => {
    await WorkShop.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

// Get a specific WorkShop controller

const viewById = async (req, res) => {
    if (req.params && req.params.id) {
        await WorkShop.findById(req.params.id)
            .populate('workshops', '_id organizerName organizerContactNo organizerEmail description researchURL')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

//Delete a WorkShop controller

const deleteById = async (req, res) => {
    const id = req.params.id
    await WorkShop.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
}

//Update a WorkShop controller

const updateById = async (req, res) => {
    const id = req.params.id;
    const {organizerName, organizerContactNo, organizerEmail, description, researchURL} = req.body;
    const updateWorkShop = {
        organizerName,
        organizerContactNo,
        organizerEmail,
        description,
        researchURL
    }
    const update = await WorkShop.findByIdAndUpdate(id, updateWorkShop)
        .then(() => {
            res.status(200).send({status: "WorkShop Updated"})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: " Error", error:err.message});
        })
}


module.exports = {
    createWorkshop,
    viewAllWorkshops,
    viewById,
    deleteById,
    updateById
}