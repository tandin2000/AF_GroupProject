const ResearchPaper = require('../models/ResearchPaper.model');

const createRP = async (res, req) => {
    if (req.body) {
        const RP = new ResearchPaper(res.body);
        RP.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

module.exports = {
    createRP
};