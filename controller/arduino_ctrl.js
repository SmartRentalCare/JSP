'use strict';

const arduinoDAO = require('../model/arduinoDAO');

//[A202303250835_4_001]
async function arduinoPost(req, res) {
    try {
        const result = req.params.result;

        let kind = result.substring(0,1);
        let detection = result.substring(1, 13);
        let density = result.substring(14, 15);
        let carID = result.substring(16, 19);

        let db_data = await arduinoDAO.dataSelect(carID);
        let carNum = db_data[0].carNum;

        let user = await arduinoDAO.userSelect(carNum);
        user = user[0].user;

        const parameters = { user, carNum, detection, kind, density };
        console.log(parameters)
        db_data = await arduinoDAO.dataInsert(parameters);
        
        res.send("Insert Success");
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

module.exports = { arduinoPost }