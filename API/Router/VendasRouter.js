const express = require("express");
const router = express.Router();
const vendasController = require("../Controller/VendasController");

router.get("/", vendasController.listar);
router.get("/:id", vendasController.buscarId);
router.delete("/:id", vendasController.deletar);
router.post("/", vendasController.inserir);

module.exports = router;
