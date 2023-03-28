const express = require("express");
const router = express.Router();
const main_ctrl = require("../controller/main_ctrl");

router.get('/main', main_ctrl.main);
router.post('/main', main_ctrl.mainPost);

module.exports = router;