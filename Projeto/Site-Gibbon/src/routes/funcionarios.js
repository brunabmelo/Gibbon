var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController")

router.get("/listar/:id_empresa", function (req, res) {
    funcionarioController.listar(req, res);
});

router.get("/niveisAcesso", function(req, res) {
    funcionarioController.buscarNiveisAcesso(req, res)
})

router.post("/cadastrar", function (req, res) {
    funcionarioController.cadastrar(req, res);
});

router.post("/acessoFuncionario", function (req, res) {
    funcionarioController.cadastrarAcessoFuncionario(req, res);
});

module.exports = router;