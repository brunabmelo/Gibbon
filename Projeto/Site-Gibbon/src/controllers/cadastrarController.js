var funcionarioModel = require("../models/funcionarioModel");
const { listar } = require("./funcionarioController");
function cadastrar(req, res) {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email = req.body.email;
    var nivelAcesso = req.body.nivelAcesso;
    var senha = req.body.senha;
    var fkEmpresa = req.session.idEmpresa; 

    funcionarioModel.cadastrar(nome, sobrenome, email, nivelAcesso, senha, fkEmpresa)
        .then(resultado => res.status(201).json(resultado))
        .catch(erro => {
            console.error("Erro ao cadastrar funcionário:", erro);
            res.status(500).json(erro);
        });
}
module.exports = {
    cadastrar
}