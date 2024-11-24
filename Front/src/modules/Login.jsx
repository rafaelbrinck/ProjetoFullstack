import imagemLogo from '../assets/financa.png'
import imagemEntrar from '../assets/entrar.png'

function entrar(){
    const button = document.getElementById('buttonLogin')
    const login = document.querySelector('.containerLogin')
    const admin = document.querySelector('.admin')

    button.addEventListener('click', () => {
        login.style.display = 'none';
        admin.style.display = 'block'
    })
    
    
}


export default function Login(){
    const registrar = () => {
        document.getElementById('cadastre-se').addEventListener('click', () => {
            document.getElementById('containerLogin').style.display = "none"
            document.getElementById('containerSignIn').style.display = "flex"
        })
        
    }


    "select usuario from Usuarios where usuario = ";"DROP TABLE USUARIOS"


    return(
        <div className="containerLogin"id='containerLogin'>
            <div className="login">
                <span className="foto">
                    <img src={imagemLogo} alt="" />
                </span>
                <span className="entrada">
                    <input type="text" name="login" id="login" 
                    placeholder='Usuário'/>
                    <input type="password" name="senha" id="senha" placeholder='Senha' />
                    <button id='buttonLogin' onClick={entrar}><img src={imagemEntrar} alt="" /></button>
                </span>
            </div>
            <a href="#" className="cadastre-se" id='cadastre-se' onClick={registrar}><p>Não tem conta? Cadastre-se</p></a>
        </div>
    )
}