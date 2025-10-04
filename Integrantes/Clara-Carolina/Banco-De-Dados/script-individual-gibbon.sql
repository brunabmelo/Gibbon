CREATE DATABASE Gibbon;

USE Gibbon;

CREATE TABLE empresa (
  idEmpresa int primary key auto_increment,
  nome varchar(80) not null,
  cnpj char(14) unique not null
);

CREATE TABLE usuario (
  idUsuario int primary key auto_increment,
  nome varchar(30) not null,
  sobrenome varchar(120) not null,
  email varchar(80) unique not null,
  senha varchar(255) not null
);

CREATE TABLE estufa (
  idEstufa int primary key auto_increment,
  nome varchar(50)
);

CREATE TABLE sensorInferior (
  idSensorI int primary key auto_increment,
  titulo varchar(50),
  valor decimal (5,2),
  dtRegistro datetime 
);

CREATE TABLE sensorSuperior (
  idSensorF int primary key auto_increment,
  titulo varchar(50),
  valor decimal (5,2),
  dtRegistro datetime
);
