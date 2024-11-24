import { useState } from 'react'
//import './App.css'
import './css/Login.css'
import Login from './modules/Login'
import './css/Admin.css'
import BarraTarefas from './modules/BarraTarefas'
import Icones from './modules/Icones'
import Perfil from './modules/Perfil'
import Cadastro from './modules/Cadastro'
import CadastroProdutos from './modules/CadastroProdutos'
import CadastroClientes from './modules/CadastroClientes'
import CadastreSe from './modules/Cadastre-se'
import Estoque from './modules/listas/Estoques'



function App() {
  
  return (
   <>
      <Login />
      <CadastreSe/>
      <div className="admin">
        <Icones/>
        <Cadastro/>
        <Estoque/>
        <CadastroProdutos/>
        <CadastroClientes/>


        <BarraTarefas />

      </div>
   </>
    
  )
}

export default App
