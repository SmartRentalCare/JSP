const express = require("express");
const router = express.Router();
const list_ctrl = require("../controller/list_ctrl");

//리스트 삽입 및 조회
router.get('/carInfo', list_ctrl.carInfo);
router.post('/carInfo', list_ctrl.carInfo_post);

module.exports = router;