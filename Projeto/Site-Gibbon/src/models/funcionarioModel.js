var database = require("../database/config");
var { cadastrar } = require("./cadastrarModel");

function listar(id_empresa) {
    var instrucaoSql = `
        SELECT
            nome,
            sobrenome,
            email,
            senha
        FROM usuario
        WHERE fKEmpresa = ${id_empresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    listar, 
    cadastrar
}