const Mainpage = require('../models/mainPage.model');           // Require the database structre

//Create CreateMainPage by getting details --------

const CreateMainPage = async (req, res) => {
    if (req.body) {
        const mainpage = new Mainpage(req.body);
        await mainpage.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}
//Not sure await above




// Get all getAllMain -------------
const getAllMain = async (req, res) => {
    await Mainpage.find({})
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}


module.exports = {
    CreateMainPage,
    getAllMain
};

