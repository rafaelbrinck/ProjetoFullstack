const { getConexao } = require("../config/database");

async function listar() {
  const client = getConexao();
  await client.connect();
  const result = await client.query("SELECT * FROM categoria");
  await client.end();
  return result.rows;
}

async function deletar(id) {
  const client = getConexao();
  await client.connect();
  const result = await client.query(
    "DELETE FROM categoria WHERE id = $1 RETURNING *",
    [id]
  );
  await client.end();
  return result.rows[0];
}

async function buscarId(id) {
  const client = getConexao();
  await client.connect();
  const result = await client.query("SELECT * FROM categoria WHERE id = $1", [
    id,
  ]);
  await client.end();
  return result.rows[0];
}

async function inserir(categoria) {
  const client = getConexao();
  await client.connect();
  const result = await client.query(
    "INSERT INTO categoria(nome) VALUES ($1) RETURNING *",
    [categoria.nome]
  );
  await client.end();
  return result.rows[0];
}

module.exports = {
  listar,
  deletar,
  buscarId,
  inserir,
};
