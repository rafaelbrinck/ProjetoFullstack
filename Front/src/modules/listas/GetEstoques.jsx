import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaEstoques = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/produtos'); // URL da sua API
                setProdutos(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

    return (
                produtos.map(produto => (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td> 
                        <td>{produto.categoria}</td>
                        <td>{produto.preco}</td>
                    </tr>
                ))
            
    );
};

export default ListaEstoques;