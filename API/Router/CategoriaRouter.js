const express = require("express");
const router = express.Router();
const categoriaController = require("../Controller/CategoriaController");

router.get("/", categoriaController.listar);
router.get("/:id", categoriaController.buscarId);
router.delete("/:id", categoriaController.deletar);
router.post("/", categoriaController.inserir);

module.exports = router;
