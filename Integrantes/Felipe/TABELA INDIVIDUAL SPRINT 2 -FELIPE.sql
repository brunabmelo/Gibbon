-- TABELA 1 - CADASTRO
CREATE DATABASE tomate;
USE tomate;
CREATE TABLE cadastro (
Idcadastro INT PRIMARY KEY auto_increment,
Empresa VARCHAR(100) not null,
email VARCHAR(50) NOT NULL,
CONSTRAINT chkemail CHECK (email LIKE '%@%'),
CNPJ CHAR(30) NOT NULL,
cod_veri INT UNIQUE
);

-- TABELA 2 - USUÁRIO
CREATE TABLE usuario (
Idcadastro INT PRIMARY KEY auto_increment,
nome VARCHAR(100) not null,
email VARCHAR(50) UNIQUE NOT NULL,
CONSTRAINT chkemaill CHECK (email LIKE '%@%'),
Tipo VARCHAR(50)
CONSTRAINT chkTipo CHECK(tipo IN ('Admistrador', 'Usuário')),
CPF CHAR(30) NOT NULL,
Senha VARCHAR(30) not null
);

-- TABELA 3 - ARDUINO
CREATE TABLE sensor (
idcontrole INT PRIMARY KEY auto_increment,
Modelo VARCHAR(30),
Locall VARCHAR (40),
Tempo_de_funcionamento TIME,
Dia_atual DATE
);

-- TABELA 4 - REGISTROS
CREATE TABLE registros (
idreg INT PRIMARY KEY auto_increment,
luminosidade_atual INT,
horário_atual DATETIME DEFAULT CURRENT_TIMESTAMP
);











