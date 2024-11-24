const { getConexao } = require("../config/database");
let idGerador = () => Math.floor(Math.random() * 9000);

async function listar() {
  const client = getConexao();
  await client.connect();
  const result = await client.query("select * from produtos");
  await client.end();
  return result.rows;
}

async function inserir(produto) {
  produto.id = idGerador();
  // Banco
  const client = getConexao();
  await client.connect();
  const result = await client.query(
    "INSERT INTO PRODUTOS (categoria, nome, preco,custo, conta) values ($1, $2, $3, $4, $5) RETURNING *",
    [
      produto.categoria,
      produto.nome,
      produto.preco,
      produto.custo,
      produto.conta,
    ]
  );
  await client.end();
  return result.rows[0];
}

async function deletar(id) {
  const client = getConexao();
  await client.connect();
  const result = await client.query(
    "DELETE FROM produtos WHERE id = $1 RETURNING *",
    [id]
  );
  await client.end();
  return result.rows[0];
}

async function buscarIdProdutos(id) {
  const client = getConexao();
  await client.connect();
  const result = await client.query("SELECT * FROM produtos WHERE id = $1", [
    id,
  ]);
  await client.end();
  return result.rows[0];
}

module.exports = {
  listar,
  inserir,
  deletar,
  buscarIdProdutos,
};
