var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/", function (req, res) {
    dashboardController.ppfd(req, res);
});

router.get("/estufas/:idEmpresa", function (req, res) {
    dashboardController.listarEstufas(req, res);
});

router.get("/sensores/:idEstufa", function (req, res) {
    dashboardController.listarSensores(req, res);
});


module.exports = router;