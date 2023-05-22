"use strict";

const {db} = require("../config/dbconn");

function dataInsert() {
    return new Promise((resolve, reject) => {
        const queryData = `INSERT INTO carInfo(user, carInfo, date, kind, density) values(?, ?, ?, ?, ?)`;
        db.query(queryData, [], (err, db_data) => {
            if(err) reject(err);
            else resolve(db_data);
        });
    });
}

module.exports = { dataInsert };