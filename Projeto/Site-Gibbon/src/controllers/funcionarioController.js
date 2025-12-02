var funcionarioModel = require("../models/funcionarioModel");

function listar(req, res) {
    let id_empresa = req.params.id_empresa

    funcionarioModel.listar(id_empresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os funcionários: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarNiveisAcesso(req, res) {
    let id_empresa = req.body.id_empresa
    let id_funcionario = req.body.id_funcionario

    funcionarioModel.buscarNiveisAcesso(id_empresa, id_funcionario).then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum nível de acesso encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os níveis de acesso: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    buscarNiveisAcesso
}