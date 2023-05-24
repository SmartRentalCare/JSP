'use strict';

const mainDAO = require('../model/mainDAO');

const paging = (currentPage, pageSize) => {
    const default_start_page = 0;
    const page_size = pageSize;
    if (currentPage < 0 || !currentPage) currentPage = default_start_page;
    let result = {
        offset: (currentPage) * page_size,
        limit: Number(page_size)
    }
    return result;
}

//main get with paging
async function main(req, res) {
    try {
        let currentPage = req.query.page;
        const pageSize = 9;
        const page = paging(currentPage, pageSize);

        const parameters = {
            offset: page.offset,
            limit: page.limit
        };

        const db_data = await mainDAO.All_searchResult(parameters);
        console.log(db_data);

        res.status(200).json(db_data);
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

//main search get
async function mainGet(req, res) {
    try {
        const parameters = req.query.keyword;

        const db_data = await mainDAO.searchResult(parameters);

        res.status(200).json(db_data);
    }
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

//main search post
async function mainPost(req, res) {
    try {
        const parameters = req.body.keyword;

        const db_data = await mainDAO.searchResult(parameters);

        if(db_data) res.send({ result: "일치하는 차량번호가 있습니다."});
        else res.send({ result: "일치하는 차량번호가 없습니다."});
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
    mainGet,
    mainPost,
    detectionGet,
    detectionPost
}