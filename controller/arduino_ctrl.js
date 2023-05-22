'use strict';

const arduinoDAO = require('../model/arduinoDAO');

async function arduinoPost(req, res) {
    try {
        const result = req.qeury.result;

        //result mod (123허1234)
        const carInfo = result.substr(0, 7);
        const date = result.substr(8, 16);
        const kind = result.substr(17,)
        const density = "";

        const parameters = { carInfo, date, kind, density };
        const db_data = await arduinoDAO.dataInsert(parameters);
        
        res.send("Insert Success");
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

module.exports = { arduinoPost }