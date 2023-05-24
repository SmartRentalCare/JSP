const express = require("express");
const router = express.Router();
const main_ctrl = require("../controller/main_ctrl");

//main
router.get('/main', main_ctrl.main);

router.get('/main/search', main_ctrl.mainGet);
router.post('/main/search', main_ctrl.mainPost);

//detection
router.get('/detection', main_ctrl.detectionGet);
router.post('/detection', main_ctrl.detectionPost);

module.exports = router;