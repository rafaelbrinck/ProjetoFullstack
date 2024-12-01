const { getConexao } = require("../config/database");

async function listar() {
  const cliente = getConexao();
  await cliente.connect();
  const result = await cliente.query("SELECT * FROM VENDAS");
  await cliente.end();
  return result.rows;
}

async function buscarId(id) {
  const cliente = getConexao();
  await cliente.connect();
  const result = await cliente.query("SELECT * FROM VENDAS WHERE ID = $1", [
    id,
  ]);
  await cliente.end();
  return result.rows[0];
}

async function deletar(id) {
  const cliente = getConexao();
  await cliente.connect();
  const result = await cliente.query(
    "DELETE FROM vendas WHERE id = $1 RETURNING *",
    [id]
  );
  await cliente.end();
  return result.rows;
}

async function inserir(venda) {
  const cliente = getConexao();
  await cliente.connect();
  const result = await cliente.query(
    "INSERT INTO vendas (usuario, cliente, produtos, valor) VALUES ($1, $2, $3, $4) RETURNING *",
    [venda.usuario, venda.cliente, venda.produtos, venda.valor]
  );
  await cliente.end();
  return result.rows[0];
}

module.exports = { listar, buscarId, deletar, inserir };
