var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
console.log("Recebendo valores")

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});
router.post("/selecionar", function (req, res) {
    usuarioController.selecionar(req, res);
});
router.post("/repeticao", function (req, res) {
    usuarioController.repeticao(req, res);
});
router.post("/muralFut", function (req, res) {
    usuarioController.muralFut(req, res);
});
router.post("/muralVol", function (req, res) {
    usuarioController.muralVol(req, res);
});
router.post("/muralBas", function (req, res) {
    usuarioController.muralBas(req, res);
});
router.post("/muralMus", function (req, res) {
    usuarioController.muralMus(req, res);
});
router.post("/muralSka", function (req, res) {
    usuarioController.muralSka(req, res);
});
router.post("/muralSurf", function (req, res) {
    usuarioController.muralSurf(req, res);
});
router.post("/grafico", function (req, res) {
    usuarioController.grafico(req, res);
})

module.exports = router;