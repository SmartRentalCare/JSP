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

function Count_detectionResult(parameters) {
    return new Promise((resolve, reject) => {
        const queryData = `SELECT user, carNum, count(user AND carNum) as cnt FROM detectionInfo GROUP BY user, carNum HAVING cnt >= 3 LIMIT ?,?`;
        db.query(queryData, [parameters.offset, parameters.limit], (err, db_data) => {
            if(err) reject(err);
            else resolve(db_data);
        });
    });
}

module.exports = {
    All_detectionResult,
    Count_detectionResult
}