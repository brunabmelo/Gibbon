var database = require("../database/config");

function listar(id_empresa) {
    var instrucaoSql = `
        SELECT
            nome
        FROM estufa
        WHERE fkEmpresa = ${id_empresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
}