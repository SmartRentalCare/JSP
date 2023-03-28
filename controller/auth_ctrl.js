'use strict';

const jwtmiddle = require('../middleware/jwt');

async function signIn(req, res) {
    try {
        const token = req.cookies.user;
        console.log(token)
        let userID = "";

        if (token == undefined) {
            return res.send('접근할수 없습니다.');
        }
        if (req.cookies.user !== undefined) {
            console.log("로그인 정보 있음");
            userID = req.cookies['user'];
        }
        
        res.send({ result: userID });
        // res.render('/sign/in', { result: userID });
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
                "pw": req.body.userPW
            }
            if(parameters.id !== "cryduswjd" || parameters.pw !== "duswjd0619") {
                res.send({ result: "아이디 혹은 비밀번호가 틀렸습니다."});
            }
            else {
                const token = await jwtmiddle.jwtCreate(parameters.id);
                res.cookie('user', token);
                res.send({ result: token, msg: "로그인하였습니다." });
            }
        }
    } 
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

//get
async function revise_check(req, res) {
    try {
        const token = req.cookies.user;

        const permission = await jwtmiddle.jwtCreate(token);
        res.send({ result: permission });
    }
    catch (err) {
        console.log(err);
        res.send("Failed");
    }
}

//post
async function revise_check_post(req, res) {
    try {
        const token = req.cookies.user;

        const permission = await jwtmiddle.jwtCerti(token);

        if(permission != false) res.send({ result: permission });
        else res.send({ result: "세션이 만료되었습니다. "});
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
    revise_check,
    revise_check_post,
    logOut
}