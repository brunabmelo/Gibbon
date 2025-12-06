var database = require("../database/config");

function buscar(ID_EMPRESA, dataHora) {
    var instrucaoSql = `
    SELECT sensor, estufa FROM vw_avisos
    WHERE empresa = ${ID_EMPRESA} AND dataHora = '${dataHora}' AND foraIdeal = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
}