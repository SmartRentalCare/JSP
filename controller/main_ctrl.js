'use strict';

async function main(req, res) {
    try {
        res.send({ result: "Server On" });
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

async function mainPost(req, res) {
    try {
        res.send({ result: "Servr On" });
    }
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

module.exports = {
    main,
    mainPost
}