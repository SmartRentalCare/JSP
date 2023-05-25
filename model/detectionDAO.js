"use strict";

const {db} = require("../config/dbconn");

function All_detectionResult(parameters) {
    return new Promise((resolve, reject) => {
        const queryData = `SELECT user, carNum, detection, kind, density FROM detectionInfo LIMIT ?, ?`;
        db.query(queryData, [parameters.offset, parameters.limit], (err, db_data) => {
            if(err) reject(err);
            else resolve(db_data);
        });
    });
}

// function All_detectionResult() {
//     return new Promise((resolve, reject) => {
//         const queryData = `SELECT user, carNum, detection, kind, density FROM detectionInfo`;
//         db.query(queryData, [], (err, db_data) => {
//             if(err) reject(err);
//             else resolve(db_data);
//         });
//     });
// }

module.exports = {
    All_detectionResult
}