create database Gibbon;
use Gibbon;

create table cadastro (
id int primary key auto_increment,
nome varchar(40),
cnpj varchar(14) not null,
estado varchar(2));

insert into cadastro (nome, cnpj, estado) values
('Tomatec' ,'96824678901234', 'MG'),
('Viva Fruta' ,'98509340100039', 'SP'),
('Plantec' ,'58747205801724', 'RS'),
(null ,'0248205801724', 'MG');

select * from cadastro;

create table arduino (
id int primary key auto_increment,
nomeEstufa varchar (30),
tempoInicio time,
tempoFinal time);

insert into arduino (nomeEstufa, tempoInicio, tempoFinal) values
('Estufa A', '07:00:00', '07:30:00'),
('Estufa B', '08:00:00', '08:52:03'),
('Estufa C', '12:00:00', '12:50:00'),
('Estufa D', '08:59:00', '09:40:00');

select * From arduino;