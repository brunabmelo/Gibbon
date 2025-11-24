var database = require("../database/config");

function buscar() {
    var instrucaoSql = `
          SELECT 
    nivelLuz AS 'Nivel da luz',
		CASE 
        WHEN estadoLuz = 1 THEN 'ILUMINADO' 
        ELSE 'ESCURO' END AS 'Estado da luz',
    sensor.nome AS 'Sensor',
    estufa.localEstufa AS 'Local da Estufa',
    empresa.idEmpresa AS 'Empresa'
FROM
    registro
        JOIN
    sensor ON fkSensor = idSensor
        JOIN
    setor ON fkSetor = idSetor
        JOIN
    estufa ON setor.fkEstufa = idEstufa
        JOIN
    empresa ON estufa.fkEmpresa = idEmpresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar
}