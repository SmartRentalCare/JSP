"use strict";

const mysql = require('mysql');
require('dotenv').config({ path: '.env' });

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Duswjd123!',
    database: 'GraduationProject',
    multipleStatements: true
})

module.exports = {db};