CREATE DATABASE gibbon;
USE gibbon;

CREATE TABLE endereco (
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    bairro VARCHAR(45),
    cidade VARCHAR(45),
    estado VARCHAR(45),
    rua VARCHAR(45),
    cep CHAR(8) NOT NULL,
    numero VARCHAR(6) NOT NULL
);

CREATE TABLE login (
	idLogin INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE cliente (
	idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    cnpj CHAR(14) NOT NULL,
    email VARCHAR(45) NOT NULL,
    telefone CHAR(11),
    fkEndereco INT,
    CONSTRAINT fkClienteEndereco
		FOREIGN KEY (fkEndereco)
			REFERENCES endereco (idEndereco),
    fkLogin INT,
    CONSTRAINT fkClienteLogin
		FOREIGN KEY (fkLogin)
			REFERENCES login (idLogin)
);

CREATE TABLE sensor (
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
    estufa VARCHAR(45) NOT NULL,
    setor VARCHAR(45) NOT NULL,
    fkCliente INT,
    CONSTRAINT fkSensorCliente
		FOREIGN KEY (fkCliente)
			REFERENCES cliente (idCliente)
);

CREATE TABLE registro (
	idRegistro INT,
    fkSensor INT,
    CONSTRAINT pkComposta
		PRIMARY KEY(idRegistro, fkSensor),
	CONSTRAINT fkRegistroSensor
		FOREIGN KEY (fkSensor)
			REFERENCES sensor (idSensor),
    nivelLuminosidade DECIMAL(5,2) NOT NULL,
    estadoLuminosidade TINYINT NOT NULL,
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO endereco (cep, numero) VALUES
	('12345123', '100'),
	('54321321', '200');
    
INSERT INTO login (email, senha) VALUES
	('empresa@empresa.com', '123456'),
	('oficial@profissional.com', '123');
    
INSERT INTO cliente (nome, cnpj, email, fkEndereco, fkLogin) VALUES
	('Empresa', '12345678901234', 'empresa@contato.com', 1, 1),
	('profissional', '43210987654321', 'profissional@contato,com', 2, 2);
    
INSERT INTO sensor (estufa, sensor, fkCliente) VALUES
	('Estufa grande', 'Setor A', 1),
	('Estufa grande', 'Setor A', 1),
	('Estufa profissional', 'Setor 01', 2);
    
INSERT INTO registro VALUES
	(1, 1, 22, 1),
	(2, 1, 21, 1),
	(3, 1, 23, 1),
	(1, 2, 1, 0),
	(2, 2, 3, 0),
	(3, 2, 2, 0),
	(1, 3, 28, 0),
	(2, 3, 30, 1),
	(3, 3, 31, 1);
    
