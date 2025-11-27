var express = require("express");
var router = express.Router();

var estufasController = require("../controllers/estufasController")

router.get("/listar/:id_empresa", function (req, res) {
    estufasController.listar(req, res);
});

module.exports = router;