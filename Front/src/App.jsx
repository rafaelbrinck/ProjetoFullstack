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



function App() {
  
  return (
   <>
      <Login />
      <div className="admin">
        <Icones/>
        
        <Cadastro/>
        <CadastroProdutos/>
        <BarraTarefas />

      </div>
   </>
    
  )
}

export default App
