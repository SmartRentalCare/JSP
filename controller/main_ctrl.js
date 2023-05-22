'use strict';

const mainDAO = require('../model/mainDAO');

// const paging = (currentPage, pageSize) => {
//     const default_start_page = 0;
//     const page_size = pageSize;
//     if (currentPage < 0 || !currentPage) currentPage = default_start_page;
//     let result = {
//         offset: (currentPage) * page_size,
//         limit: Number(page_size)
//     }
//     return result;
// }

// //main get with paging
// async function main(req, res) {
//     try {
//         let currentPage = req.query.page;
//         const pageSize = 10;
//         const page = paging(currentPage, pageSize);

//         const parameters = {
//             offset: page.offset,
//             limit: page.limit
//         }

//         const item = await mainDAO.All_searchResult(parameters);
//         console.log(item)

//         res.render('/main', { result: item });
//         // res.send({result: item })
//     } 
//     catch (err) {
//         console.log(err);
//         res.send("Failed");
//     }
// }

//main get
async function main(req, res) {
    try {
        const item = await mainDAO.All_searchResult();
        res.status(200).json(item);
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

//main post
async function mainPost(req, res) {
    try {
        const parameters = req.body.keyword;

        const db_data = await mainDAO.searchResult(parameters);
        console.log(db_data);
    
        if(db_data) {
            return res.send ({ db_data });
        }
        else {
            res.send({ result: "일치하는 차량번호가 없습니다."});
        }
    }
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

module.exports = {
    main,
    mainPost
}