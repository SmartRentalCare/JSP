'use strict';

const detectionDAO = require('../model/detectionDAO');
const paging = require('../middleware/paging');

async function detectionGet(req, res) {
    try {
        let currentPage = req.query.page;
        const pageSize = 4;
        const page = paging(currentPage, pageSize);

        const parameters = {
            offset: page.offset,
            limit: page.limit
        };

        const db_data = await detectionDAO.All_detectionResult(parameters);

        res.status(200).json(db_data);
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

module.exports = {
    detectionGet
}