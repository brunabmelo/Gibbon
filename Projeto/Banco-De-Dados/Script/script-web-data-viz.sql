-- Script Sprit 3 com resultados dinâmicos

-- Insert de cadastro de funcionário
INSERT INTO funcionario ( nome, sobrenome, email, senha, fkEmpresa)
        VALUES ('${nome}', '${sobrenome}', '${email}', '${senha}', ${fkEmpresa});
        
-- select tela de alerta 
SELECT sensor, estufa FROM vw_avisos
    WHERE empresa = ${ID_EMPRESA} AND dataHora = 1 AND foraIdeal = 1;
    
    
-- View para consultar horas iluminadas do dia anterior
CREATE VIEW vw_horas_ilumonadas_dia_anterior as 
SELECT
    e.idEstufa,
    s.idSensor,
    SUM(CASE WHEN r.estadoLuz = 1 THEN 1 ELSE 0 END) AS horas_ilumonadas
FROM registro r
JOIN sensor s ON s.idSensor = r.fkSensor
JOIN estufa e ON e.idEstufa = s.fkEstufa
WHERE DATE(r.dataHora) = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
  AND e.idEstufa = 1
  AND s.idSensor = 1
GROUP BY e.idEstufa, s.idSensor;

