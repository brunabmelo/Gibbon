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