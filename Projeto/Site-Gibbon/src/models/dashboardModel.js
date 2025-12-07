var database = require("../database/config");

// Model da função PPFD
function buscarRegistros(id_estufa, id_sensor, id_empresa, limite) {

    var instrucaoSql = `
        SELECT 
            r.nivelLuz, 
            r.dataHora
        FROM registro r
        JOIN sensor s 
            ON s.idSensor = r.fkSensor
        JOIN estufa e 
            ON e.idEstufa = s.fkEstufa
        WHERE s.fkEstufa = ${id_estufa} AND s.idSensor = ${id_sensor} AND e.fkEmpresa = ${id_empresa}
        ORDER BY r.dataHora DESC LIMIT ${limite};
    `;

    console.log("Executando a instrução SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarEstufas(idEmpresa) {
    var instrucaoSql = `
        SELECT idEstufa, nome
        FROM estufa
        WHERE fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando SQL listarEstufas:\n", instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarSensores(idEstufa) {
    var instrucaoSql = `
        SELECT idSensor, nome
        FROM sensor
        WHERE fkEstufa = ${idEstufa};
    `;
    console.log("Executando SQL listarSensores:\n", instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFotoperiodoAnterior(id_estufa, id_sensor, id_empresa) {
    var instrucaoSql = `
        SELECT v.idEstufa, v.idSensor, v.horas_ilumonadas
        FROM vw_horas_ilumonadas_dia_anterior v
        JOIN estufa e ON e.idEstufa = v.idEstufa
        WHERE v.idEstufa = ${id_estufa}
          AND v.idSensor = ${id_sensor}
          AND e.fkEmpresa = ${id_empresa};
    `;

    console.log("Executando SQL buscarFotoperiodoAnterior:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdeais(idEstufa, idSensor, idEmpresa) {
    const instrucaoSql = `
        SELECT 
            CONCAT(v.ppfdMin, ' - ', v.ppfdMax) AS ppfdIdeal,
            CONCAT(v.horasMin, ' - ', v.horasMax) AS fotoperiodoIdeal,
            CONCAT(v.dliMin, ' - ', v.dliMax) AS dliIdeal
        FROM estufa e
        JOIN variedade v ON v.idVariedade = e.fkVariedade
        WHERE e.idEstufa = ${idEstufa}
          AND v.idSensor = ${idSensor}
          AND e.fkEmpresa = ${idEmpresa};
    `;

    return database.executar(instrucaoSql);
}

function buscarPpfdDia(idEstufa, idSensor, idEmpresa) {
    const instrucao = `
        SELECT
            MAX(r.ppfd) AS ppfdMax,
            MIN(r.ppfd) AS ppfdMin
        FROM registro r
        JOIN sensor s ON s.idSensor = r.fkSensor
        JOIN estufa e ON e.idEstufa = s.fkEstufa
        WHERE DATE(r.dataHora) = CURDATE()
          AND e.idEstufa = ${idEstufa}
          AND s.idSensor = ${idSensor}
          AND e.fkEmpresa = ${idEmpresa};
    `;

    return database.executar(instrucao);
}

module.exports = {
    buscarRegistros,
    listarEstufas,
    listarSensores,
    buscarFotoperiodoAnterior,
    buscarIdeais,
    buscarPpfdDia

};