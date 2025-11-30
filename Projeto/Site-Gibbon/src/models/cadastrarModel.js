var database = require("../database/config");

function cadastrar(nome, sobrenome, email, nivelAcesso, senha, fkEmpresa) {

    var instrucao = `
        INSERT INTO funcionario ( nome, sobrenome, email, senha, fkEmpresa, fkNivelAcesso)
        VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}', ${fkEmpresa}, ${nivelAcesso});
    `;


    console.log("Executando SQL:", instrucao);

    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};
