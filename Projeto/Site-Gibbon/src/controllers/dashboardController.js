var dashboardModel = require("../models/dashboardModel");

function ppfd(req, res) {
    var id = req.params.id;  // usando id da URL

    if (id == undefined) {
        res.status(400).send("O id da estufa está undefined!");
    } else {

        dashboardModel.ppfd(id)
            .then(function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(204).json([]);
                }
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarEstufas(req, res) {
    var idEmpresa = req.params.idEmpresa;

    if (idEmpresa == undefined) {
        res.status(400).send("O id da empresa está undefined!");
    } else {
        dashboardModel.listarEstufas(idEmpresa)
            .then(function (resultado) {
                console.log(`Estufas encontradas: ${resultado.length}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarSensores(req, res) {
    var idEstufa = req.params.idEstufa;

    if (idEstufa == undefined) {
        res.status(400).send("O id da estufa está undefined!");
    } else {
        dashboardModel.listarSensores(idEstufa)
            .then(function (resultado) {
                console.log(`Sensores encontrados: ${resultado.length}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    ppfd,
    listarEstufas,
    listarSensores
};
