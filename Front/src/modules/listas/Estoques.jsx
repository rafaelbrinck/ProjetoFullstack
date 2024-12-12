import { atualizaListaClientes, sair, trocarAbaListas } from "../../functions/functions";
import ListaClientes from "./GetClientes";
import ListaEstoques from "./GetEstoques";

export default function Estoque() {
    return (
        <div className="containerEstoque" id="containerEstoque">
            <div className="estoque" id="paginaEstoque">
                <div className="base">
                    <button className="opSair" id="opSair" onClick={sair}></button>
                </div>
                <div className="estoqueAbas">
                    <span
                        className="estoqueAbaProdutos"
                        id="btnAbaProdutos"
                        onClick={trocarAbaListas}
                    >
                        <p>Produtos</p>
                    </span>
                    <span
                        className="estoqueAbaClientes"
                        id="btnAbaClientes"
                        onClick={trocarAbaListas}
                    >
                        <p>Clientes</p>
                    </span>
                </div>
                <div className="abaProdutos" id="abaProdutos">
                    <div className="areatabela">
                        <table className="tabela">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ListaEstoques />
                            </tbody>
                        </table>
                    </div>
                    <div className="tabelaOpcoes">
                        <button className="btnProdutos">Nome</button>
                        <button className="btnProdutos">Categoria</button>
                        <button className="btnProdutos">Mostrar tudo</button>
                    </div>
                </div>
                <div className="abaClientes" id="abaClientes">
                    <div className="areatabela">
                        <table className="tabela">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Contato</th>
                                    <th>CEP</th>
                                    <th>Endereço</th>
                                    <th>Cidade</th>
                                    <th>UF</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ListaClientes/>
                            </tbody>
                        </table>
                    </div>
                    <div className="tabelaOpcoes">
                        <button className="btnProdutos">Nome</button>
                        <button className="btnProdutos">Categoria</button>
                        <button onClick={atualizaListaClientes} className="btnProdutos">Mostrar tudo</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}





// import { sair, trocarAbaListas } from "../../functions/functions";
// import ListaEstoques from "./GetEstoques";

// export default function Estoque(){
//     return(
//         <div className="containerEstoque" id="containerEstoque">
//             <div className="estoque" id="paginaEstoque">
//                 <div className="base">
//                     <button className="opSair" id="opSair" onClick={sair}></button>

//                 </div>
//                 <div className="estoqueAbas">
//                     <span className="estoqueAbaProdutos" id="btnAbaProdutos"
//                     onClick={trocarAbaListas}>
//                         <p>Produtos</p>
//                     </span>
//                     <span className="estoqueAbaClientes"id="btnAbaClientes"
//                     onClick={trocarAbaListas}>
//                         <p>Clientes</p>
//                     </span>
//                 </div>
//                 <div className="abaProdutos" id="abaProdutos">
//                     <div className="areatabela">
//                         <table className="tabela">
//                             <thead>
//                                 <tr>
//                                     <th>Id</th>
//                                     <th>Nome</th>
//                                     <th>Categoria</th>
//                                     <th>Preço</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <ListaEstoques />
//                             </tbody>
                            
//                         </table>
//                     </div>
//                     <div className="tabelaOpcoes">
//                         <button className="btnProdutos">Nome</button>
//                         <button className="btnProdutos">Categoria</button>
//                         <button className="btnProdutos">Mostrar tudo</button>
//                     </div>
//                 </div>
//                 <div className="abaClientes" id="abaClientes">
//                     <div className="areatabela">
//                         <table className="tabela">
//                             <tr>
//                                 <th>Id</th>
//                                 <th>Nome</th>
//                                 <th>Contato</th>
//                                 <th>CEP</th>
//                                 <th>Endereço</th>
//                                 <th>Cidade</th>
//                                 <th>UF</th>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Rafael Brinckmann</td>
//                                 <td>51991374848</td>
//                                 <td>91060350</td>
//                                 <td>José Mauricio, 76 - 103</td>
//                                 <td>Porto Alegre</td>
//                                 <td>RS</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Rafael Brinckmann</td>
//                                 <td>51991374848</td>
//                                 <td>91060350</td>
//                                 <td>José Mauricio, 76 - 103</td>
//                                 <td>Porto Alegre</td>
//                                 <td>RS</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Rafael Brinckmann</td>
//                                 <td>51991374848</td>
//                                 <td>91060350</td>
//                                 <td>José Mauricio, 76 - 103</td>
//                                 <td>Porto Alegre</td>
//                                 <td>RS</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Rafael Brinckmann</td>
//                                 <td>51991374848</td>
//                                 <td>91060350</td>
//                                 <td>José Mauricio, 76 - 103</td>
//                                 <td>Porto Alegre</td>
//                                 <td>RS</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Rafael Brinckmann</td>
//                                 <td>51991374848</td>
//                                 <td>91060350</td>
//                                 <td>José Mauricio, 76 - 103</td>
//                                 <td>Porto Alegre</td>
//                                 <td>RS</td>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Rafael Brinckmann</td>
//                                 <td>51991374848</td>
//                                 <td>91060350</td>
//                                 <td>José Mauricio, 76 - 103</td>
//                                 <td>Porto Alegre</td>
//                                 <td>RS</td>
//                             </tr>
//                         </table>
//                     </div>
//                     <div className="tabelaOpcoes">
//                         <button className="btnProdutos">Nome</button>
//                         <button className="btnProdutos">Categoria</button>
//                         <button className="btnProdutos">Mostrar tudo</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }