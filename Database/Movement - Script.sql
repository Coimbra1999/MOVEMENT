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

insert into Usuario values
		("10", "Guilherme Coimbra", "1.75", "66", "m",	"guilherme@email.com", "123"),
        ("11", "Ivan Freire", "1.80", "70", "m",	"ivan@email.com", "123"),
        ("12",	"Amadeu	Santos", "1.60", "72", "m",	"amadeu@email.com",	"123"),
        ("13",	"Thiago	Soares", "1.82", "80", "m",	"thiago@email.com",	"123"),
        ("14",	"Sandra	Coimbra", "1.55", "55", "f", "sandra@email.com", "123"),
        ("20",	"Lucas	Oliveira", "1.88", "80", "m", "lucas@email.com", "123"),
        ("22",	"Leandro Justino", "1.87", "85", "m", "leandro@email.com", "123"),
        ("24",	"bruno	Santiago", "1.80", "80", "m", "bruno@email.com", "123"),
        ("25",	"Pedro	Henrique", "1.70", "70", "m", "bolota@email.com", "123"),
        ("27",	"Lucas	Pereira", "1.77", "75", "m", "pereira@email.com", "123"),
        ("28",	"Analice Coimbra", "1.52", "63", "f", "ana@email.com", "123"),
        ("31",	"Zaira	Silva", "1.55",	"65", "f", "analice@email.com",	"123"),
        ("32",	"Lana Coimbra", "1.55",	"60", "f", "lana@email.com", "123");
        
insert into UsuarioEsporte values
		(10, 1),
        (11, 1),
        (12, 1),
        (13, 1),
        (24, 1),
        (27, 1),
        (33, 1),
        (10, 2),
        (12, 2),
        (13, 2),
        (10, 3),
        (12, 3),
        (13, 3),
        (24, 3),
        (27, 3),
        (33, 3),
        (10, 4),
        (12, 4),
        (13, 4),
        (14, 4),
        (24, 4),
        (10, 5),
        (12, 5),
        (13, 5),
        (27, 5),
        (33, 5),
        (10, 6),
        (12, 6),
        (13, 6),
        (27, 6);