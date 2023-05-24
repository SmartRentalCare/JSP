'use strict';

const arduinoDAO = require('../model/arduinoDAO');

async function arduinoPost(req, res) {
    try {
        const result = req.params.result;

        const abc = result.split("_");

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