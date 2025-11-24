var database = require("../database/config");

function login(email, senha) {
    const instrucao = `
        SELECT idEmpresa, nome, email
        FROM empresa
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = { login };