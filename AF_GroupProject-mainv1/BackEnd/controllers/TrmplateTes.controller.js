const TemplateTes = require('../models/TemplateTes.model');          // Require the database structre

//Create TemplateTes by getting details --------

const CreateTemplateTes = async (req, res) => {
    if (req.body) {
        const templateTes = new TemplateTes(req.body);
        await templateTes.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all TemplateTes -------------
const getAllTemplateTes = async (req, res) => {
    await TemplateTes.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}



const DownloadSpecificTemplateTes = async (req, res) => {
    const item = await TemplateTes.findById(req.params.id)

    const link = item.link;

    res.status(200).send({link: link});

}


const getSpecificTemplateTes = async (req, res) => {
    const item2 = await TemplateTes.findById(req.params.id)

    const name = item2.name;
    const type = item2.type;
    const link = item2.link;
    const description = item2.description;
    res.status(200).send({name: name, type: type, link: link, description: description});

}


module.exports = {
    CreateTemplateTes,
    getAllTemplateTes,

    DownloadSpecificTemplateTes,
    getSpecificTemplateTes,
};

