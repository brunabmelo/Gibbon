var database = require("../database/config");

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

function buscarNiveisAcesso(id_empresa, id_funcionario) {
    var instrucaoSql = `
        SELECT
            na.nivel
        FROM acessoFuncionario af
        JOIN nivelAcesso na
            ON af.fkNivelAcesso = na.idNivelAcesso
        WHERE af.fKEmpresa = ${id_empresa} AND af.fkFuncionario = ${id_funcionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar, 
    buscarNiveisAcesso
}