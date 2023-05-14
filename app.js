"use strict";

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const corsOptions = {
  origin: '*',
  credential: true,
};

app.use(cors(corsOptions));

const cookieParser = require('cookie-parser');

const authRouter = require("./routes/authRouter");
const mainRouter = require("./routes/mainRouter");

app.set('views', path.join(__dirname, '../front/src/pages'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

app.use("/", mainRouter);
app.use("/auth", authRouter);

module.exports = app;