import imagemLogo from '../assets/cadastro.png'
import imagemEntrar from '../assets/entrar.png'

export default function CadastreSe(){
    const registro = () => {
        document.getElementById('buttonRegistro').addEventListener('click', () => {
            document.getElementById('containerLogin').style.display = "flex"
            document.getElementById('containerSignIn').style.display = "none"
        })
        
    }


    return(
        <div className="containerSignIn" id='containerSignIn'>
            <div className="SignIn">
                <span className="foto">
                    <img src={imagemLogo} alt="" />
                </span>
                <span className="registro">
                    <input type="text" name="usuario" id="usuario" placeholder="Usuario"/>
                    <input type="password" name="senha" id="senha" placeholder='Senha'/>
                    <input type="password" name="senhaIgual" id="senhaIgual" placeholder='Confirme senha'/>
                    <button id='buttonRegistro' className='EntrarRegistro' onClick={registro}><img src={imagemEntrar} alt="" /></button>
                </span>
            </div>
        </div>
    )
}