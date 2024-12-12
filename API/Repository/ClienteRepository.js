const { getConexao } = require("../config/database");

async function listar() {
  const cliente = getConexao();
  await cliente.connect();
  const result = await cliente.query("SELECT * FROM CLIENTES");
  await cliente.end();
  return result.rows;
}

async function deletar(id) {
  const cliente = getConexao();
  await cliente.connect();
  const result = await cliente.query(
    "DELETE FROM CLIENTES WHERE id = $1 RETURNING *",
    [id]
  );
  await cliente.end();
  return result.rows[0];
}

async function buscarId(id) {
  const cliente = getConexao();
  await cliente.connect();
  const result = await cliente.query("SELECT * FROM CLIENTES WHERE id = $1", [
    id,
  ]);
  await cliente.end();
  return result.rows[0];
}

async function inserir(client) {
  const cliente = getConexao();
  await cliente.connect();
  const result = await cliente.query(
    "INSERT INTO CLIENTES (conta, nome, cep, endereco, cidade, uf, contato) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [
      client.conta,
      client.nome,
      client.cep,
      client.endereco,
      client.cidade,
      client.uf,
      client.contato,
    ]
  );
  await cliente.end();
  return result.rows;
}

module.exports = {
  listar,
  deletar,
  buscarId,
  inserir,
};
