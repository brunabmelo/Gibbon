var database = require("../database/config");

function listar(id_empresa) {
    var instrucaoSql = `
        SELECT
            sensor.nome nome_sensor,
            estufa.nome nome_estufa
        FROM sensor
        JOIN estufa
            ON sensor.fkEstufa = estufa.idEstufa
        WHERE estufa.fkEmpresa = ${id_empresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorEstufa(id_estufa, id_empresa) {
    var instrucaoSql = `
        SELECT
            sensor.idSensor id_sensor,
            sensor.nome nome_sensor,
            estufa.nome nome_estufa
        FROM sensor
        JOIN estufa
            ON sensor.fkEstufa = estufa.idEstufa
        WHERE estufa.fkEmpresa = ${id_empresa} AND sensor.fkEstufa = ${id_estufa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, id_estufa) {
    var instrucaoSql = `
        INSERT INTO sensor (nome, fkEstufa) VALUES
            ('${nome}', ${id_estufa})
        ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorEstufa,
    cadastrar
}