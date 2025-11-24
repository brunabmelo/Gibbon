var express = require("express");
var router = express.Router();

var avisosController = require("../controllers/avisosController")

router.get("/buscar", function (req, res) {
    avisosController.buscar(req, res);
});

module.exports = router;
