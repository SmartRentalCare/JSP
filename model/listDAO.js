"use strict";

const {db} = require("../config/dbconn");

function carInfo() {
    return new Promise((resolve, reject) => {
        const queryData = `SELECT user, carInfo FROM carInfo`;
        db.query(queryData, [], (err, db_data) => {
            if(err) reject(err);
            else resolve(db_data);
        });
    });
}

function carInfo_post(parameters) {
    return new Promise((resolve, reject) => {
        const queryData = `INSERT INTO carInfo(user, carInfo) values(?, ?)`;
        db.query(queryData, [parameters.user, parameters.carInfo], (err, db_data) => {
            if(err) reject(err);
            else resolve(db_data);
        });
    });
}

module.exports = {
    carInfo,
    carInfo_post
}