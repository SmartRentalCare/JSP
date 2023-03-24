"use strict";

const express = require('express');
const app = express();
const path = require('path');

const cookieParser = require('cookie-parser');

const mainRouter = require("./routes/mainRouter");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

app.use("/", mainRouter);

module.exports = app;