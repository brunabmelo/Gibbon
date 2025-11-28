var database = require("../database/config");
var { cadastrar } = require("./cadastrarModel");

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
    listar, 
    cadastrar
}