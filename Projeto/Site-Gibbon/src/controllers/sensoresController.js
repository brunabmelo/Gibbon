var sensoresModel = require("../models/sensoresModel");

function listar(req, res) {
    let id_empresa = req.params.id_empresa;

    sensoresModel.listar(id_empresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os sensores: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    let nome = req.body.nome
    let id_estufa = req.body.id_estufa
    let id_empresa = req.params.id_empresa

    sensoresModel.cadastrar(id_empresa, nome, id_estufa)
        .then(resultado => resultado.status(201).json(resultado))
        .catch(erro => {
            console.error("Erro ao cadastrar sensor:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    listar,
    cadastrar
}