var express = require("express");
var router = express.Router();

var sensoresController = require("../controllers/sensoresController")

router.get("/listar/:id_empresa", function (req, res) {
    sensoresController.listar(req, res);
});

router.get("/listar/estufa/:id_estufa/empresa/:id_empresa", function (req, res) {
    sensoresController.listarPorEstufa(req, res);
});

router.post('/cadastrar', function (req, res) {
    sensoresController.cadastrar(req, res)
})

module.exports = router;