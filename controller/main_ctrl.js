'use strict';

//main get
async function main(req, res) {
    try {
        // res.send({ result: "Server On" });
        res.render('LoginPage');
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

//main post
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