create database Movement;
use Movement;


create table Usuario (
id int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
altura decimal (3,2),
peso int,
sexo char(1),
email varchar(45) unique,
senha varchar(45)
) auto_increment = 10;

select * from usuario;

create table Esporte (
idEsporte int primary key auto_increment,
nomeEsporte varchar(45)
);

insert into Esporte values
				(1, 'Futebol'),
                (2, 'Volei'),
                (3, 'Basquete'),
                (4, 'Musculação'),
                (5, 'Skate'),
                (6, 'Surf');
                
create table UsuarioEsporte (
fkUsuario int,
foreign key (fkUsuario) references Usuario(id),
fkEsporte int,
foreign key (fkEsporte) references Esporte(idEsporte),
primary key (fkUsuario, fkEsporte)
);

select distinct(count(fkEsporte)) as "quantidade", nomeEsporte from UsuarioEsporte 
    join Esporte on fkEsporte = idEsporte group by nomeEsporte;

select * from usuarioesporte;

select * from usuario, esporte, UsuarioEsporte where fkusuario = id and fkEsporte = idEsporte and id = 27;

select count(fkEsporte) from UsuarioEsporte join Usuario on fkUsuario = id
join Esporte on fkEsporte = idEsporte where id = 10; 

select count(fkEsporte) from UsuarioEsporte join Esporte on fkEsporte = idEsporte and idEsporte = 1;

select nomeEsporte 
from esporte 
join UsuarioEsporte 
on idEsporte = fkEsporte
where fkUsuario = 10;

INSERT INTO usuario (nome, sobrenome, altura, peso, email, senha) VALUES ('Lucas','Oliveira', 
        '1.75', '80', 'lucas@email.com', '123');
update usuario set sexo = 'f' where email = 'sandra@email.com';

select * from usuario;