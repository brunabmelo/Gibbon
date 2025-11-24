var database = require("../database/config");

function cadastrar(nome, sobrenome, email, nivelAcesso, senha, fkEmpresa) {
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, email, senha, nivelAcesso, fkEmpresa)
        VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}', ${nivelAcesso}, ${fkEmpresa});
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
}