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

select * from Usuario;

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
		(null, "Guilherme", "Coimbra", "1.75", "66", "m",	"guilherme@email.com", "123"),
        (null, "Ivan", "Freire", "1.80", "70", "m",	"ivan@email.com", "123"),
        (null,	"Amadeu", "Santos", "1.60", "72", "m",	"amadeu@email.com",	"123"),
        (null,	"Thiago", "Soares", "1.82", "80", "m",	"thiago@email.com",	"123"),
        (null,	"Sandra", "Coimbra", "1.55", "55", "f", "sandra@email.com", "123"),
        (null,	"Lucas", "Oliveira", "1.88", "80", "m", "lucas@email.com", "123"),
        (null,	"Leandro", "Justino", "1.87", "85", "m", "leandro@email.com", "123"),
        (null,	"bruno", "Santiago", "1.80", "80", "m", "bruno@email.com", "123"),
        (null,	"Pedro", "Henrique", "1.70", "70", "m", "bolota@email.com", "123"),
        (null,	"Lucas", "Pereira", "1.77", "75", "m", "pereira@email.com", "123"),
        (null,	"Analice", "Coimbra", "1.52", "63", "f", "ana@email.com", "123"),
        (null,	"Zaira", "Silva", "1.55",	"65", "f", "analice@email.com",	"123"),
        (null,	"Lana", "Coimbra", "1.55",	"60", "f", "lana@email.com", "123");
        select * from Usuario;
insert into UsuarioEsporte values
		(10, 1),
        (11, 1),
        (12, 1),
        (15, 1),
        (22, 1),
        (17, 1),
        (13, 1),
        (10, 2),
        (12, 2),
        (13, 2),
        (10, 3),
        (12, 3),
        (13, 3),
        (15, 3),
        (19, 3),
        (21, 3),
        (10, 4),
        (12, 4),
        (13, 4),
        (14, 4),
        (22, 4),
        (10, 5),
        (12, 5),
        (13, 5),
        (18, 5),
        (15, 5),
        (10, 6),
        (12, 6),
        (13, 6),
        (22, 6);
        
        select * from UsuarioEsporte join Usuario on fkUsuario = id;