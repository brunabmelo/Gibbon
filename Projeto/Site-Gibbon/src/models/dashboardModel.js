var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function ppfd(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", guerreiro, mago, artesao, sabio, arqueiro, lanceiro)
    var instrucaoSql = `
   SELECT r.nivelLuz, r.dataHora
FROM registro r
INNER JOIN sensor s ON s.idSensor = r.fkSensor
INNER JOIN estufa e ON e.idEstufa = s.fkEstufa
WHERE e.idEstufa = ${id}
order by r.dataHora;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    
    ppfd

};