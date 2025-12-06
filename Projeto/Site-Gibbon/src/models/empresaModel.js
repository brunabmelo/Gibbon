var database = require("../database/config");

function login(email, senha) {
    const instrucao = `
        SELECT 
            f.idFuncionario,
            f.nome,
            f.sobrenome, 
            f.email, 
            f.senha,
            f.fkEmpresa 
        FROM funcionario f 
        WHERE f.email = '${email}' AND f.senha = '${senha}';
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao, [email, senha]);
}
module.exports = { login };