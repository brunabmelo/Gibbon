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

function buscarFotoperiodoAnterior(idEstufa, idSensor, idEmpresa) {
    var instrucaoSql = `
        SELECT * FROM vw_horas_iluminadas_dia_anterior
        WHERE idEstufa = ${idEstufa}
            AND idSensor = ${idSensor};
        
    `;

    console.log("Executando SQL buscarFotoperiodoAnterior:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarIdeais(idEstufa, idSensor, idEmpresa) {
    const instrucaoSql = `
        SELECT 
            CONCAT(e.ppfdMin, ' - ', e.ppfdMax) AS ppfdIdeal,
            CONCAT(e.horasMin, ' - ', e.horasMax) AS fotoperiodoIdeal,
            CONCAT(e.dliMin, ' - ', e.dliMax) AS dliIdeal
        FROM estufa e
        JOIN sensor s ON s.fkEstufa = e.idEstufa
        JOIN empresa em ON em.idEmpresa = e.fkEmpresa
        WHERE e.idEstufa = ${idEstufa}
            AND s.idSensor = ${idSensor}
            AND em.idEmpresa = ${idEmpresa};
    `;
    console.log("Executando SQL buscarIdeais:\n", instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarPpfdDia(idEstufa, idSensor, idEmpresa) {
    const instrucao = `
    SELECT
        MAX(r.nivelLuz) AS ppfdMax,
        MIN(r.nivelLuz) AS ppfdMin
    FROM registro r
        JOIN sensor s ON s.idSensor = r.fkSensor
        JOIN estufa e ON e.idEstufa = s.fkEstufa
    WHERE DATE(r.dataHora) = CURRENT_DATE()
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