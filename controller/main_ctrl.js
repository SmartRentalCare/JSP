'use strict';

const mainDAO = require('../model/mainDAO');

//main get
async function main(req, res) {
    try {
        const item = await mainDAO.All_searchResult();
        console.log(item)

        // res.render('/main', { result: item });
        res.send({result: item })
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

//main post
async function mainPost(req, res) {
    try {
        const parameters = req.body.searchKeyword;
        console.log(parameters)

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