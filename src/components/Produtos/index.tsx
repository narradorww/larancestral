import React from "react";
import { Link } from "react-router-dom";

const Produtos = () => {
  // Digamos que você tenha uma lista de produtos que virá de uma API ou de algum estado
  const produtos = [
    { id: 1, nome: "Produto 1", slug: "produto-1" },
    { id: 2, nome: "Produto 2", slug: "produto-2" },
  ];

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link to={`/produtos/${produto.slug}`}>{produto.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
