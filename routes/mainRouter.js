const express = require("express");
const router = express.Router();
const login_ctrl = require("../controller/login_ctrl");

//signIn
router.get('/sign/in', login_ctrl.signIn);
router.post('/sign/in', login_ctrl.checkUser);

//logOut
router.get('/logout', login_ctrl.logOut);

module.exports = router;