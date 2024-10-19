import React from "react";
import styled from "styled-components";


const ProdutosContainer = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const ProdutoCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProdutoImagem = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const ProdutoTitulo = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

const ProdutoPreco = styled.p`
  font-size: 1.1rem;
  color: #f0a500;
  margin: 10px 0;
  font-weight: bold;
`;

const ComprarButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #f0a500;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e18b00;
  }
`;

const Produtos = () => {
  const produtos = [
    { id: 1, nome: "Figura do Capitão América", preco: "R$ 199,99", imagem: '/images/capitao_america.jpg' },
    { id: 2, nome: "Camiseta do Flash", preco: "R$ 79,99", imagem: '/images/camiseta_flash.jpg' },
    { id: 3, nome: "Action Figure do Homem-Aranha", preco: "R$ 249,99", imagem: '/images/homem_aranha.jpg' },
    { id: 4, nome: "Caderno do Batman", preco: "R$ 49,99", imagem: '/images/caderno_batman.jpg' },
  ];
  
  return (
    <ProdutosContainer>
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id}>
          <ProdutoImagem src={produto.imagem} alt={produto.nome} />
          <ProdutoTitulo>{produto.nome}</ProdutoTitulo>
          <ProdutoPreco>{produto.preco}</ProdutoPreco>
          <ComprarButton>Comprar</ComprarButton>
        </ProdutoCard>
      ))}
    </ProdutosContainer>
  );
};

export default Produtos;
