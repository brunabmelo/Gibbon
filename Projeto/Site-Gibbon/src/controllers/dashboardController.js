var dashboardModel = require("../models/dashboardModel");

function buscarRegistros(req, res) {
    var id_estufa = req.params.id_estufa;
    var id_sensor = req.params.id_sensor;
    var id_empresa = req.params.id_empresa;
    var limite = req.params.limite;

    dashboardModel.buscarRegistros(id_estufa, id_sensor, id_empresa, limite)
        .then(function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);

            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([{}]);
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
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

function buscarFotoperiodoAnterior(req, res) {
    var id_estufa = req.params.id_estufa;
    var id_sensor = req.params.id_sensor;
    var id_empresa = req.params.id_empresa;

    dashboardModel.buscarFotoperiodoAnterior(id_estufa, id_sensor, id_empresa)
        .then(function (resultado) {
            console.log(`Fotoperíodo anterior encontrados: ${resultado.length}`);
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([{}]);
            }
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarRegistros,
    listarEstufas,
    listarSensores,
    buscarFotoperiodoAnterior
};
