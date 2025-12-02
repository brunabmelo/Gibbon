var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController")

router.get("/listar/:id_empresa", function (req, res) {
    funcionarioController.listar(req, res);
});

router.get("/niveisAcesso", function(req, res) {
    funcionarioController.buscarNiveisAcesso(req, res)
})

module.exports = router;