const WorkShop = require('../models/workshop.model');

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

const viewAllWorkshops = async (req, res) => {
    await WorkShop.find({})
        .then(data=>{
            res.status(200).send({data: data});
        })
        .catch(error =>{
            res.status(500).send({error: error.message});
        });
}

const viewById = async (req, res) => {
    if (req.params && req.params.id) {
        await WorkShop.findById(req.params.id)
            .populate('workshops', '_id organizerName organizerContactNo organizerEmail description proposalURL')
            .then(response => {
                res.status(200).send({ data: response });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const deleteById = async (req, res) => {
    const id = req.params.id
    await WorkShop.findByIdAndRemove(id).exec()
    res.send('itemDeleted');
}

const updateById = async (req, res) => {
    const id = req.params.id;
    const {status} = req.body;
    const updateWorkShop = {
        status
    }
    const update = await WorkShop.findByIdAndUpdate(id, updateWorkShop)
        .then(() => {
            res.status(200).send({status: "ViewWorkShop Updated"})
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