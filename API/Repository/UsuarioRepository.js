const { getConexao } = require("../config/database");
let idGerador = () => Math.floor(Math.random() * 9000);

async function listar() {
  const client = getConexao();
  await client.connect();
  const result = await client.query("SELECT * FROM USUARIOS");
  await client.end();
  return result.rows;
}

async function inserir(user) {
  if (!user.nome) user.nome = null;
  const client = getConexao();
  await client.connect();
  const result = await client.query(
    "INSERT INTO USUARIOS (usuario, nome, senha) VALUES ($1, $2, $3) RETURNING *",
    [user.usuario, user.nome, user.senha]
  );
  await client.end();
  return result.rows;
}

async function deletar(user) {
  const client = getConexao();
  await client.connect();
  const result = await client.query(
    "DELETE FROM usuarios WHERE id = $1 RETURNING *",
    [user.id]
  );
  await client.end();
  return result.rows;
}

async function buscarIdUsuarios(id) {
  const client = getConexao();
  await client.connect();
  const result = await client.query("SELECT * FROM usuarios WHERE id = $1", [
    id,
  ]);
  await client.end();
  if (result.rows.length < 1) {
    return false;
  }
  return result.rows[0];
}

module.exports = {
  listar,
  inserir,
  deletar,
  buscarIdUsuarios,
};
