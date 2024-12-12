import React, {useEffect, useState} from "react";
import axios from "axios";

const ListaClientes = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try{
                const response = await axios.get('http://localhost:3000/api/clientes')
                setClientes(response.data)
            } catch(error){
                console.error("Erro ao buscar clientes: ", error)
            }
        }
        fetchClientes();
    }, [])

    return (
        clientes.map(cliente => (
            <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.contato}</td>
                <td>{cliente.cep}</td>
                <td>{cliente.endereco}</td>
                <td>{cliente.cidade}</td>
                <td>{cliente.uf}</td>
            </tr>
        ))
    )
}

export default ListaClientes;