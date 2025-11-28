var estufasModel = require("../models/estufasModel");

function listar(req, res) {
    let id_empresa = req.params.id_empresa;

    estufasModel.listar(id_empresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as estufas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    let nome = req.body.nome
    let ppfdMin = req.body.ppfdMin
    let ppfdMax = req.body.ppfdMax
    let id_empresa = req.params.id_empresa

    estufasModel.cadastrar(id_empresa, nome, ppfdMin, ppfdMax)
        .then(resultado => resultado.status(201).json(resultado))
        .catch(erro => {
            console.error("Erro ao cadastrar estufa:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    listar,
    cadastrar
}