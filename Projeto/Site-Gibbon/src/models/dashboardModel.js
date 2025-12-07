var database = require("../database/config");

// Model da função PPFD
function buscarRegistros(id_estufa, id_sensor, id_empresa, limite) {

    var instrucaoSql = `
        SELECT 
            r.nivelLuz, 
            r.dataHora
        FROM registro r
        JOIN sensor s 
            ON s.idSensor = r.fkSensor
        JOIN estufa e 
            ON e.idEstufa = s.fkEstufa
        WHERE s.fkEstufa = ${id_estufa} AND s.idSensor = ${id_sensor} AND e.fkEmpresa = ${id_empresa}
        ORDER BY r.dataHora DESC LIMIT ${limite};
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
    buscarRegistros,
    listarEstufas,
    listarSensores

};