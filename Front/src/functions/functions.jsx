export function sair() {
  const containerCadastro = document.getElementById("containerCadastro");
  const containerCadastroClientes = document.getElementById('containerCadastroClientes')
  const cadastroClientes = document.getElementById('cadastroClientesdiv')
  const containerCadastroProdutos = document.getElementById('containerCadastroProdutos')
  const ListaEstoque = document.getElementById('paginaEstoque')
  const containerListaEstoque = document.getElementById('containerEstoque')
  const botaoSair = document.getElementsByClassName('opSair')
  

  Array.from(botaoSair).forEach(botao => {
    botao.addEventListener("click", () => {
      containerCadastro.style.display = "none";
      containerCadastroClientes.style.display = 'none'
      containerCadastroProdutos.style.display = 'none'
      cadastroClientes.style.display = "none"
      ListaEstoque.style.display = "none"
      containerListaEstoque.style.display = "none"
    });
  });
}

export function trocarAbaListas(){
  document.getElementById('btnAbaClientes').addEventListener('click', () =>{
    document.getElementById('abaProdutos').style.display = 'none'
    document.getElementById('btnAbaProdutos').style.backgroundColor = 'rgb(57, 115, 64)'
    document.getElementById('abaClientes').style.display = "flex"
    document.getElementById('btnAbaClientes').style.backgroundColor = "var(--tela-color)"
  })
  document.getElementById('btnAbaProdutos').addEventListener('click', () =>{
    document.getElementById('abaProdutos').style.display = "flex"
    document.getElementById('btnAbaProdutos').style.backgroundColor = "var(--tela-color)"
    document.getElementById('abaClientes').style.display = 'none'
    document.getElementById('btnAbaClientes').style.backgroundColor = 'rgb(57, 115, 64)'
  })
}

