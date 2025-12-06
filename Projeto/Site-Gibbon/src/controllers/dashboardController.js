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

module.exports = {
    ppfd
};
