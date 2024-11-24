const { getConexao } = require("../config/database");
let idGerador = () => Math.floor(Math.random() * 900);
const cliente = getConexao();

async function listar() {
  await cliente.connect();
  const result = await cliente.query("SELECT * FROM CLIENTES");
  await cliente.end();
  return result.rows;
}

async function deletar(id) {
  await cliente.connect();
  const result = await cliente.query(
    "DELETE FROM CLIENTES WHERE id = $1 RETURNING *",
    [id]
  );
  await cliente.end();
  return result.rows[0];
}

async function buscarId(id) {
  await cliente.connect();
  const result = await cliente.query("SELECT * FROM CLIENTES WHERE id = $1", [
    id,
  ]);
  await cliente.end();
  return result.rows[0];
}

async function inserir(client) {
  client.id = idGerador();
  await cliente.connect();
  const result = await cliente.query(
    "INSERT INTO CLIENTES (id, conta, nome, cep, endereco, cidade, uf) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [
      client.id,
      client.conta,
      client.nome,
      client.cep,
      client.endereco,
      client.cidade,
      client.uf,
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
