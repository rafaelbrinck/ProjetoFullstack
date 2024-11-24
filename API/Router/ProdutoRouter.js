const express = require("express");
const router = express.Router();
const ProdutoController = require("../Controller/ProdutoController");

router.get("/", ProdutoController.listar);
router.get("/:id", ProdutoController.buscarId);
router.post("/", ProdutoController.inserir);
router.delete("/:id", ProdutoController.deletar);

module.exports = router;
