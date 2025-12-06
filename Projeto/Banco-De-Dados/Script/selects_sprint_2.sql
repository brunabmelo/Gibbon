-- SELECTS SPRINT 2
SELECT 
    empresa.nome AS 'Nome da empresa',
    cnpj AS 'CNPJ',
    empresa.email AS 'Email da empresa',
    CASE
        WHEN situacaoContrato = 1 THEN 'ATIVO'
        ELSE 'INATIVO'
    END AS 'Situação do contrato',
    dtContratacao AS 'Data de contrato'
FROM
    empresa
        JOIN
    endereco ON fkEmpresa = idEmpresa; 

SELECT 
    CONCAT(funcionario.nome, ' ', funcionario.sobrenome) AS 'Nome Completo',
    funcionario.email AS 'Email',
    empresa.nome AS 'Empresa',
    nivelAcesso.nivel AS 'Nivel de Acesso'
FROM
    funcionario
        JOIN
    empresa ON fkEmpresa = idEmpresa
        JOIN
    nivelAcesso ON fkNivelAcesso = idNivelAcesso;
 
SELECT 
    nivelLuz AS 'Nivel da luz',
  CASE WHEN estadoLuz = 1 THEN 'ILUMINADO' ELSE 'ESCURO' END AS 'Estado da luz',
    dataHora AS 'Data e hora',
    sensor.nome AS 'Sensor',
    setor.nome AS 'Setor',
    estufa.localEstufa AS 'Local da Estufa',
    empresa.nome AS 'Empresa'
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