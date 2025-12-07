var database = require("../database/config");

function listar(id_empresa) {
    var instrucaoSql = `
        SELECT
            idFuncionario,
            nome,
            sobrenome,
            email,
            senha,
            fkEmpresa
        FROM funcionario
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

function cadastrar(nome, sobrenome, email, senha, fkEmpresa) {

    var instrucao = `
        INSERT INTO funcionario ( nome, sobrenome, email, senha, fkEmpresa)
        VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}', ${fkEmpresa});
    `;

    console.log("Executando SQL:", instrucao);

    return database.executar(instrucao);
}

function cadastrarAcessoFuncionario(fkFuncionario, fkEmpresa, fkNivelAcesso) {

    var instrucao = `
        INSERT INTO acessoFuncionario ( fkFuncionario, fkEmpresa, fkNivelAcesso)
        VALUES ('${fkFuncionario}', ${fkEmpresa}, ${fkNivelAcesso});
    `;

    console.log("Executando SQL:", instrucao);

    return database.executar(instrucao);
}

function atualizar(id_funcionario, id_empresa, senha) {
    var instrucao = `
        UPDATE funcionario SET senha = '${senha}'
        WHERE idFuncionario = ${id_funcionario} AND fkEmpresa = ${id_empresa};
    `;

    console.log("Executando SQL:", instrucao);

    return database.executar(instrucao);
}

module.exports = {
    listar, 
    buscarNiveisAcesso,
    cadastrar,
    cadastrarAcessoFuncionario,
    atualizar
}