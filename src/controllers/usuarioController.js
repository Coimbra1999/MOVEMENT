var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var altura = req.body.alturaServer;
    var peso = req.body.pesoServer;
    var sexo = req.body.sexoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    console.log(nome);
    console.log(sobrenome);
    console.log(altura);
    console.log(peso);
    console.log(sexo);
    console.log(email);
    console.log(senha);

    console.log("Realizando validações")
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (altura == undefined) {
        res.status(400).send("Sua altura está undefined!");
    } else if (peso == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else if (sexo == undefined) {
        res.status(400).send("Seu sexo está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, altura, peso, sexo, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function selecionar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idUsuarioServer;
    var futebol = req.body.futebolServer;
    var volei = req.body.voleiServer;
    var basquete = req.body.basqueteServer;
    var musculacao = req.body.musculacaoServer;
    var skate = req.body.skateServer;
    var surf = req.body.surfServer;

    console.log("Realizando validações")
    // Faça as validações dos valores
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.selecionar(id, futebol, volei, basquete, musculacao, skate, surf)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    function repeticao(req, res) {
        console.log(req.body);

        var id = req.body.idUsuarioServer;
        console.log('o id que chegou aqui no Controller:', id)
        
        usuarioModel.repeticao(id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    function muralFut(req, res) {
        console.log(req.body);

        var futebolVar = req.body.idFutebolServer;
        console.log(futebolVar)
        
        usuarioModel.muralFut(futebolVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    function muralVol(req, res) {
        console.log(req.body);

        var voleiVar = req.body.idVoleiServer;
        console.log(voleiVar)
        
        usuarioModel.muralVol(voleiVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    function muralBas(req, res) {
        console.log(req.body);

        var basqueteVar = req.body.idBasqueteServer;
        console.log(basqueteVar)
        
        usuarioModel.muralBas(basqueteVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    function muralMus(req, res) {
        console.log(req.body);

        var musculacaoVar = req.body.idMusculacaoServer;
        console.log(musculacaoVar)
        
        usuarioModel.muralMus(musculacaoVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    function muralSka(req, res) {
        console.log(req.body);

        var skateVar = req.body.idSkateServer;
        console.log(skateVar)
        
        usuarioModel.muralSka(skateVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    function muralSurf(req, res) {
        console.log(req.body);

        var surfVar = req.body.idSurfServer;
        console.log(surfVar)
        
        usuarioModel.muralSurf(surfVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    function grafico(req, res) {
        console.log(req.body);

        var graficoVar = req.body.idGraficoServer;
        console.log(graficoVar)
        
        usuarioModel.grafico(graficoVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    selecionar,
    repeticao,
    muralFut,
    muralVol,
    muralBas,
    muralMus,
    muralSka,
    muralSurf,
    grafico
}