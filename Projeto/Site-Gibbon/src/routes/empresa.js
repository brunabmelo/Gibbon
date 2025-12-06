var express = require("express");
var router = express.Router();
var empresaController = require("../controllers/empresaController");

router.post("/login", empresaController.login);

module.exports = router;