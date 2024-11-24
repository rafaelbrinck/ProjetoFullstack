const { Client } = require("pg");

const conexao = {
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "banco",
  database: "Projeto",
};

function getConexao() {
  return new Client(conexao);
}
module.exports = { getConexao };
