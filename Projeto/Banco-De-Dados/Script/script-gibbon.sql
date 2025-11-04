CREATE DATABASE gibbon;

USE gibbon;

CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
cnpj CHAR(14) NOT NULL,
telefoneFixo CHAR(10),
telefoneCelular CHAR(11),
email VARCHAR(100) NOT NULL,
situacaoContrato TINYINT NOT NULL,
dtContratacao DATE NOT NULL
);

CREATE TABLE estufa (
idEstufa INT PRIMARY KEY AUTO_INCREMENT,
localEstufa VARCHAR(100) NOT NULL,
descricao VARCHAR(500),
fkEmpresa INT, CONSTRAINT fk_estufa_empresa FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa) 
);

CREATE TABLE endereco (
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
cep VARCHAR(8) NOT NULL,
numero VARCHAR(10) NOT NULL,
complemento VARCHAR(45),
fkEmpresa INT, CONSTRAINT fk_endereco_empresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE nivelAcesso (
idNivelAcesso INT PRIMARY KEY AUTO_INCREMENT,
nivel VARCHAR(45) NOT NULL
);

CREATE TABLE funcionario (
idFuncionario INT, 
fkEmpresa INT, CONSTRAINT pk_funcionario_empresa PRIMARY KEY (idFuncionario,fkEmpresa),
nome VARCHAR(100) NOT NULL,
sobrenome VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
senha VARCHAR(25) NOT NULL,
fkNivelAcesso INT, CONSTRAINT fk_funcionario_acesso FOREIGN KEY (fkNivelAcesso) REFERENCES nivelAcesso(idNivelAcesso),
CONSTRAINT fk_cliente_empresa FOREIGN KEY (fkEmpresa) REFERENCES empresa (idEmpresa)
);

CREATE TABLE setor (
idSetor INT,
fkEstufa INT, CONSTRAINT pk_setor_estufa PRIMARY KEY (idSetor,fkEstufa),
CONSTRAINT fk_setor_estufa FOREIGN KEY (fkEstufa) REFERENCES estufa (idEstufa),
nome VARCHAR(45) NOT NULL,
descricao VARCHAR(500)
);

CREATE TABLE sensor (
idSensor INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
fkSetor INT,
fkEstufa INT,
CONSTRAINT fk_sensor_setor_estufa FOREIGN KEY (fkSetor, fkEstufa) REFERENCES setor (idSetor, fkEstufa)
);

CREATE TABLE registro (
idRegistro INT AUTO_INCREMENT,
fkSensor INT, CONSTRAINT fk_registro_sensor FOREIGN KEY (fkSensor) REFERENCES sensor (idSensor),
nivelLuz DECIMAL(6,2) NOT NULL,
estadoLuz TINYINT NOT NULL,
dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT pk_registro_sensor PRIMARY KEY (idRegistro,fkSensor)
);










-- INSERTS
INSERT INTO empresa (nome,email,cnpj,situacaoContrato,dtContratacao) VALUES
('Gibbon','oficial@gibbon.com','12345678901234',1,'2025-10-17');

INSERT INTO endereco (cep, numero,fkEmpresa) VALUES 
('09281666',144,1); 

INSERT INTO estufa (localEstufa,fkEmpresa) VALUES 
('hectare 1',1);

INSERT INTO setor (idSetor,fkEstufa,nome) VALUES
(1,1,'Setor de mudas');

INSERT INTO sensor (idSensor,nome,fkEstufa,fkSetor) VALUES
(1,'Sensor A',1,1),
(2,'Sensor B',1,1),
(3,'Sensor C',1,1);

INSERT INTO registro (fkSensor,nivelLuz,estadoLuz) VALUES
(1,500,1),
(2,300,1),
(3,900,1),
(1,25,0);

INSERT INTO nivelAcesso (nivel) VALUES 
('Administrador'),
('Editor'),
('Visualizador');

INSERT INTO funcionario (idFuncionario,fkEmpresa,nome,sobrenome,email,senha,fkNivelAcesso) VALUES
(1,1,'Robson','Freitas Gonçalo','robson.freitas@gibbon.com','robsonFG123',1);









-- SELECTS
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