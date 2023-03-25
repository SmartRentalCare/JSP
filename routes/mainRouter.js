const express = require("express");
const router = express.Router();
const login_ctrl = require("../controller/login_ctrl");

//signIn
router.get('/sign/in', login_ctrl.signIn);
router.post('/sign/in', login_ctrl.checkUser);

//토큰 만료 시 재발급
router.get('/revise_check', login_ctrl.revise_check);
router.post('/revise_check', login_ctrl.revise_check_post);

//logOut
router.get('/logout', login_ctrl.logOut);

module.exports = router;