var avisosModel = require("../models/avisosModel.js");

function buscar(req, res) {
    let ID_EMPRESA = req.params.ID_EMPRESA
    let dataHora = req.body.dataHora

    avisosModel.buscar(ID_EMPRESA, dataHora).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscar
}