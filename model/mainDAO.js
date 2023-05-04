"use strict";

const {db} = require("../config/dbconn");

function All_searchResult() {
    return new Promise((resolve, reject) => {
        const queryData = `SELECT user, carInfo, date FROM carInfo`;
        db.query(queryData, [], (err, db_data) => {
            if(err) reject(err);
            else resolve(db_data);
        });
    });
}

function searchResult(parameters) {
    return new Promise((resolve, reject) => {
        const queryData = `SELECT user, carInfo, date FROM carInfo WHERE carInfo = ?`;
        db.query(queryData, [parameters], (err, db_data) => {
            if(err) reject(err);
            else resolve(db_data);
        });
    });
}
module.exports = {
    All_searchResult,
    searchResult
}