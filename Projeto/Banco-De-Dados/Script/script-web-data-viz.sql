-- Script Views criadas para o projeto
USE gibbon;

CREATE VIEW vw_horas_iluminadas_dia_anterior AS 
SELECT
    e.idEstufa,
    s.idSensor,
    e.fkEmpresa,
    SUM(CASE WHEN r.estadoLuz = 1 THEN 1 ELSE 0 END)/ 3600 AS horas_iluminadas
FROM registro r
JOIN sensor s ON s.idSensor = r.fkSensor
JOIN estufa e ON e.idEstufa = s.fkEstufa
WHERE DATE(r.dataHora) = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
  AND e.idEstufa = 1
  AND s.idSensor = 1
GROUP BY e.idEstufa, s.idSensor;

CREATE VIEW vw_media_ppfd_dia_anterior AS
SELECT
    e.idEstufa,
    s.idSensor,
    AVG(r.nivelLuz) AS media_ppfd
FROM registro r
JOIN sensor s ON s.idSensor = r.fkSensor
JOIN estufa e ON e.idEstufa = s.fkEstufa
WHERE DATE(r.dataHora) = DATE_SUB(CURRENT_DATE(), INTERVAL 1 DAY)
  AND e.idEstufa = 1
  AND s.idSensor = 1
GROUP BY e.idEstufa, s.idSensor;


CREATE VIEW vw_avisos AS
    SELECT 
        s.nome sensor,
        e.nome estufa,
        CASE
            WHEN r.nivelLuz < e.ppfdMin THEN 1
            WHEN r.nivelLuz > e.ppfdMax THEN 1
            ELSE 0
        END AS foraIdeal,
        e.fkEmpresa empresa,
        r.dataHora
    FROM registro r
    JOIN
        sensor s ON r.fkSensor = s.idSensor
    JOIN
	estufa e ON s.fkEstufa = e.idEstufa;
