var dashboardModel = require("../models/dashboardModel");


function ppfd(req, res) {
    var id = req.body.IDServer;
    

    if (Id == undefined) {
        res.status(400).send("Seu Id está undefined!");
    }else {

        dashboardModel.ppfd(id)
            .then(
                function (resultadoreceber) {
                    console.log(`\nResultados encontrados: ${resultadoreceber.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoreceber)}`); // transforma JSON em String

                    if (resultadoreceber.length == 1) {
                        console.log(resultadoreceber);

                        res.json({
                        });
                    } else {
                        res.status(204).json({});
                    }
                })
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}



module.exports = {
    
    ppfd
}