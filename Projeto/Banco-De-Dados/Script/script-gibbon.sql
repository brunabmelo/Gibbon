DROP DATABASE IF EXISTS gibbon;

CREATE DATABASE gibbon;

USE gibbon;

CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
razaoSocial VARCHAR(100) NOT NULL,
cnpj CHAR(14) NOT NULL
);

CREATE TABLE endereco (
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
cep VARCHAR(8) NOT NULL,
numero VARCHAR(10) NOT NULL,
complemento VARCHAR(45),
fkEmpresa INT NOT NULL, 
CONSTRAINT fk_endereco_empresa 
FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE funcionario (
    idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(25) NOT NULL,
	fkEmpresa INT NOT NULL,
    FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE nivelAcesso (
idNivelAcesso INT PRIMARY KEY AUTO_INCREMENT,
nivel VARCHAR(45) NOT NULL
);

CREATE TABLE acessoFuncionario ( 
    fkFuncionario INT NOT NULL,
    fkEmpresa INT NOT NULL,
    fkNivelAcesso INT NOT NULL,
    PRIMARY KEY (fkFuncionario, fkEmpresa, fkNivelAcesso),
    FOREIGN KEY (fkFuncionario) REFERENCES funcionario(idFuncionario),
    FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
    FOREIGN KEY (fkNivelAcesso) REFERENCES nivelAcesso(idNivelAcesso)
);

CREATE TABLE estufa (
idEstufa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
ppfdMax INT NOT NULL,
ppfdMin INT NOT NULL,
horasMin INT NOT NULL, 
horasMax INT NOT NULL,
dliMin INT NOT NULL,
dliMax INT NOT NULL,
fkEmpresa INT NOT NULL, 
FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa) 
);

CREATE TABLE sensor (
idSensor INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
fkEstufa INT NOT NULL,
FOREIGN KEY (fkEstufa) REFERENCES estufa(idEstufa)
);

CREATE TABLE registro (
idRegistro INT AUTO_INCREMENT,
nivelLuz DECIMAL(6,2) NOT NULL,
estadoLuz TINYINT NOT NULL,
dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
fkSensor INT, 
FOREIGN KEY (fkSensor) REFERENCES sensor (idSensor),
PRIMARY KEY (idRegistro, fkSensor)
);

-- INSERTS 
INSERT INTO empresa (razaoSocial, cnpj) VALUES 
('Tomatech', '45896320147895'),
('SweetGrape', '79856301547982'),
('Taeq', '45796325421359');

INSERT INTO endereco (cep, numero, complemento, fkEmpresa) VALUES
('09010010', '100', 'Matriz', 1),
('09120020', '250', NULL, 2),
('08030500', '900', 'Galpão Central', 3);

INSERT INTO funcionario (nome, sobrenome, email, senha, fkEmpresa) VALUES
('Gilberto','Augusto', 'gilauga@tomatech.com', '123', 1),
('Carla', 'Bianchi', 'carla.bianchi@tomatech.com', '123', 1),
('Vivian','Freitas','vivian.freitas@tomatech.com', '123', 1),
('Vinicius','Goeis','vinicius.goeis@tomatech.com', '123', 1),
('Kelly','Gael','kelly.gael@tomatech.com', '123', 1),
('Patricia','Guedes','patricia.guedes@tomatech.com', '123', 1),
('Davi','Silva','davi.sudo@tomatech.com', '123', 1);

INSERT INTO nivelAcesso (nivel) VALUES 
('Administrador'),
('Editor'),
('Visualizador'), 
('Suporte N1'),
('Suporte N2'),
('Suporte N3');

INSERT INTO acessoFuncionario (fkFuncionario, fkEmpresa, fkNivelAcesso) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(5, 1, 5),
(6, 1, 6),
(7, 1, 1),
(7, 1, 2),
(7, 1, 3),
(7, 1, 4),
(7, 1, 5),
(7, 1, 6);