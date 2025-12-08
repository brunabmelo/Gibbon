var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/buscar/registros/:limite/empresa/:id_empresa/estufa/:id_estufa/sensor/:id_sensor", function (req, res) {
    dashboardController.buscarRegistros(req, res);
});

router.get("/estufas/:idEmpresa", function (req, res) {
    dashboardController.listarEstufas(req, res);
});

router.get("/sensores/:idEstufa", function (req, res) {
    dashboardController.listarSensores(req, res);
});

// router.get("/fotoperiodo/anterior/empresa/:id_empresa/estufa/:id_estufa/sensor/:id_sensor",
//     function (req, res) {
//         dashboardController.buscarFotoperiodoAnterior(req, res);
//     }
// );

router.get("/ideais/estufa/:idEstufa/sensor/:idSensor/empresa/:idEmpresa", function (req, res) {
    dashboardController.obterIdeais(req, res);
});


// router.get("/ppfd-dia/:idEstufa/:idSensor/:idEmpresa", function (req, res) {
//     dashboardController.ppfdDia(req, res);
// });


module.exports = router;