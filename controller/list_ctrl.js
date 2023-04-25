'use strict';

const listDAO = require('../model/listDAO');

async function carInfo(req, res) {
    try {
        let token = req.cookies.token;
        console.log(token);

        if(token) {
            const db_data = await listDAO.carInfo();
            return res.send({ result: db_data });
        }
        else {
            res.send({ result: "토큰이 만료되었습니다."});
        }
    }
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

async function carInfo_post(req, res) {
    try {
        let token = req.cookies.user;
        console.log(token);

        if(token) {
            const user = req.body.user;
            const carInfo = req.body.carInfo;
            const parameters = { user, carInfo };

            const db_data = await listDAO.carInfo_post(parameters);
            return res.send({ result: db_data });
        }
        else {
            res.send({ result: "정보 저장을 실패했습니다." });
        }
    }
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

module.exports = {
    carInfo,
    carInfo_post
}