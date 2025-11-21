var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT
            nome,
            sobrenome,
            email,
            senha
        FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar
}