const express = require("express");
const app = express();
const PORT = 3000;

const ProdutoRouter = require("./Router/ProdutoRouter");
const userRouter = require("./Router/UsuarioRouter");
const categoriaRouter = require("./Router/CategoriaRouter");
const clienteRouter = require("./Router/ClienteRouter");
const vendasRouter = require("./Router/VendasRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Página Inicial");
});

app.use(function (req, res, next) {
  console.log(req.method + " - " + req.originalUrl);
  next();
});

app.use("/api/produtos", ProdutoRouter);
app.use("/api/usuarios", userRouter);
app.use("/api/categorias", categoriaRouter);
app.use("/api/clientes", clienteRouter);
app.use("/api/vendas", vendasRouter);

app.listen(PORT, () => {
  console.log(`Servidor executando na porta http://localhost:${PORT}`);
});
