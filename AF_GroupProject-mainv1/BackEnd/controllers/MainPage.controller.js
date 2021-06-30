const Mainpage = require('../models/mainPage.model');          // Require the database structre

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


//60d80f5c331a9743e0d8a514
const updateMainDetails = async (req, res) => {

    Mainpage.findByIdAndUpdate('60d80f5c331a9743e0d8a514', req.body,
        function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated User : ", docs);
                res.status(200).send()
            }
        });
}


const getMainUnderPermission = async (req, res) => {
        const item = await Mainpage.findById('60d80f5c331a9743e0d8a514')
        if(item.adminpermission === "ok") {
                const name = item.name;
                const venue = item.venue;
                const time = item.time;
                const date = item.date;
                const description = item.description;
                res.status(200).send({name: name, venue: venue, time: time, date: date, description: description});
        }else{
                res.status(200).send({ data: data });
             }
}

const getNormalMain = async (req, res) => {
    const item = await Mainpage.findById('60d80f5c331a9743e0d8a514')

        const name = item.name;
        const venue = item.venue;
        const time = item.time;
        const date = item.date;
        const description = item.description;
        res.status(200).send({name: name, venue: venue, time: time, date: date, description: description});

}


module.exports = {
    CreateMainPage,
    getMainUnderPermission,
    updateMainDetails,
    getNormalMain
};

