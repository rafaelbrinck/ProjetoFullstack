const express = require("express");
const router = express.Router();
const clienteController = require("../Controller/ClienteController");

router.get("/", clienteController.listar);
router.get("/:id", clienteController.buscarId);
router.post("/", clienteController.inserir);
router.delete("/:id", clienteController.deletar);

module.exports = router;
