var database = require("../database/config");

// Model da função PPFD
function ppfd(id) {
    console.log("Executando PPFD para a estufa:", id);

    var instrucaoSql = `
        SELECT r.nivelLuz, r.dataHora
        FROM registro r
        INNER JOIN sensor s ON s.idSensor = r.fkSensor
        INNER JOIN estufa e ON e.idEstufa = s.fkEstufa
        WHERE e.idEstufa = ${id}
        ORDER BY r.dataHora;
    `;

    console.log("Executando a instrução SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarEstufas(idEmpresa) {
    var instrucaoSql = `
        SELECT idEstufa, nome
        FROM estufa
        WHERE fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando SQL listarEstufas:\n", instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarSensores(idEstufa) {
    var instrucaoSql = `
        SELECT idSensor, nome
        FROM sensor
        WHERE fkEstufa = ${idEstufa};
    `;
    console.log("Executando SQL listarSensores:\n", instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    ppfd,
    listarEstufas,
    listarSensores

};