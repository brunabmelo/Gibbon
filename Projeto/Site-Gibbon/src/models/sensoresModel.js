var database = require("../database/config");

function listar(id_empresa) {
    var instrucaoSql = `
        SELECT
            sensor.nome,
            estufa.nome
        FROM sensor
        JOIN estufa
            ON sensor.id = estufa.fkEmpresa
        WHERE estufa.fkEmpresa = ${id_empresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
}