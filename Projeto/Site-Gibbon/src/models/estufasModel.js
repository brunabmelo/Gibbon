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

function cadastrar(id_empresa, nome, ppfdMin, ppfdMax) {
    var instrucaoSql = `
        INSERT INTO estufa
            ('${nome}', ${ppfdMin}, ${ppfdMax}, ${id_empresa})
        ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar
}