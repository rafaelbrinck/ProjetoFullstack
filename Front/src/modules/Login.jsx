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

    return(
        <div className="containerLogin">
            <div className="login">
                <span className="foto">
                    <img src={imagemLogo} alt="" />
                </span>
                <span className="entrada">
                    <input type="text" name="login" id="login" 
                    placeholder='Seu Nome'/>
                    <button id='buttonLogin' onClick={entrar}><img src={imagemEntrar} alt="" /></button>
                </span>
            </div>
        </div>
    )
}