const express = require("express");
const router = express.Router();
const { perguntar } = require("../controllers/bobIA.controller");

router.post("/perguntar", perguntar);

module.exports = router;