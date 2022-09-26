var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
console.log("passando valores como parametro")

function cadastrar(nome, sobrenome, altura, peso, sexo, email, senha) {
    console.log(nome, sobrenome, altura, peso, sexo, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (nome, sobrenome, altura, peso, sexo, email, senha) VALUES ('${nome}','${sobrenome}', 
        '${altura}', '${peso}', '${sexo}', '${email}', '${senha}');
    `;
            console.log("Executando a instrução SQL: \n" + instrucao);
            return database.executar(instrucao);
        }

function selecionar(id, futebol, volei, basquete, musculacao, skate, surf) {
    if (futebol) {
    var instrucao = `
    INSERT INTO UsuarioEsporte values (${id}, ${futebol});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    if (volei) {
    var instrucao = `
    INSERT INTO UsuarioEsporte values (${id}, ${volei});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    if (basquete) {
    var instrucao = `
    INSERT INTO UsuarioEsporte values (${id}, ${basquete});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    if (musculacao) {
    var instrucao = `
    INSERT INTO UsuarioEsporte values (${id}, ${musculacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    if (skate) {
    var instrucao = `
    INSERT INTO UsuarioEsporte values (${id}, ${skate});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
    if (surf) {
    var instrucao = `
    INSERT INTO UsuarioEsporte values (${id}, ${surf});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
}
function repeticao(id) {
    var instrucao = `
    select nomeEsporte 
    from Esporte 
    join UsuarioEsporte 
    on idEsporte = fkEsporte
    where fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function muralFut(futebolVar) {
    var instrucao = `
    select count(fkEsporte) as "quantidade" from UsuarioEsporte 
    join Esporte on fkEsporte = idEsporte and idEsporte = ${futebolVar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function muralVol(voleiVar) {
    var instrucao = `
    select count(fkEsporte) as "quantidade" from UsuarioEsporte 
    join Esporte on fkEsporte = idEsporte and idEsporte = ${voleiVar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function muralBas(basqueteVar) {
    var instrucao = `
    select count(fkEsporte) as "quantidade" from UsuarioEsporte 
    join Esporte on fkEsporte = idEsporte and idEsporte = ${basqueteVar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function muralMus(musculacaoVar) {
    var instrucao = `
    select count(fkEsporte) as "quantidade" from UsuarioEsporte 
    join Esporte on fkEsporte = idEsporte and idEsporte = ${musculacaoVar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function muralSka(skateVar) {
    var instrucao = `
    select count(fkEsporte) as "quantidade" from UsuarioEsporte 
    join Esporte on fkEsporte = idEsporte and idEsporte = ${skateVar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function muralSurf(SurfVar) {
    var instrucao = `
    select count(fkEsporte) as "quantidade" from UsuarioEsporte 
    join Esporte on fkEsporte = idEsporte and idEsporte = ${SurfVar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function grafico(graficoVar) {
    var instrucao = `
    select distinct(count(fkEsporte)) as "quantidade", nomeEsporte from UsuarioEsporte 
    join Esporte on fkEsporte = idEsporte group by nomeEsporte;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
console.log("Instrução mysql")

module.exports = {
    entrar,
    cadastrar,
    listar,
    selecionar,
    repeticao,
    muralFut,
    muralVol,
    muralBas,
    muralMus,
    muralSka,
    muralSurf,
    grafico
};