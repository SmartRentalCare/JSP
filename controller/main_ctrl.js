'use strict';

const mainDAO = require('../model/mainDAO');
const paging = require('../middleware/paging');

//main get with paging
async function main(req, res) {
    try {
        let currentPage = req.query.page;
        const pageSize = 12;
        const page = paging(currentPage, pageSize);

        const parameters = {
            offset: page.offset,
            limit: page.limit
        };

        const db_data = await mainDAO.All_searchResult(parameters);
        console.log(db_data)

        res.status(200).json(db_data);
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

async function detectionGet(req, res) {
    try {

    }
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

async function detectionPost(req, res) {
    try {

    }
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

module.exports = {
    main,
    detectionGet,
    detectionPost
}