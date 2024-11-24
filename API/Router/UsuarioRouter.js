const express = require("express");
const router = express.Router();
const usuarioController = require("../Controller/UsuarioController");

router.get("/", usuarioController.listar);
router.post("/", usuarioController.inserir);
router.delete("/:id", usuarioController.deletar);
router.get("/:id", usuarioController.buscarIdUsuarios);

module.exports = router;
