'use strict';

const jwtmiddle = require('../middleware/jwt');

async function signIn(req, res) {
    try {
        const token = req.cookie.user;
        
        res.send({ result: token });
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

async function checkUser(req, res) {
    try {
        const special_pattern = /[` ~!@#$%^&*|\\\'\";:\/?]/gi;

        if (special_pattern.test(req.body.user) ||
            req.body.userID == undefined || req.body.userPW == undefined ||
            req.body.userID == " " || req.body.userPW == " " ||
            req.body.userID == null || req.body.userPW == null) {
            res.send({ result: "잘못된 값을 입력하였습니다." });
        } 
        else {
            const parameters = {
                "id": req.body.userID,
                "pw": req.body.userPWD
            }
            if(parameters.id !== "cryduswjd" || parameters.pw !== "duswjd0619") {
                res.send({ result: "아이디 혹은 비밀번호가 틀렸습니다."});
            }
            else {
                const token = await jwtmiddle.jwtCreate(parameters.id);
                res.cookie("user", token);
                res.send("로그인하였습니다.");
            }
        }
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

async function logOut(req, res) {
    try {
        const token = req.cookies.user;
        res.clearCookie('user');
        res.redirect('/');
    } 
    catch (err) {
        res.send("Failed");
    }
}

module.exports = {
    signIn,
    checkUser,
    logOut
}