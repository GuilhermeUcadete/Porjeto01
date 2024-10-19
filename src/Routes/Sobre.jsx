import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  padding: 40px 30px;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin: 20px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TextContainer = styled.div`
  background-color: #f5f5f5;
  padding: 30px;
  border-radius: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.div`
  margin-top: 30px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Sobre = () => {
  return (
    <Div>
      <H1>Sobre a Hero's Lair</H1>
      <TextContainer>
        <P>
          Bem-vindo ao Hero's Lair, a loja geek onde a paixão por heróis, aventuras e cultura pop se encontra com produtos exclusivos e inovações incríveis. Se você é fã de quadrinhos, filmes, séries, jogos ou colecionáveis, aqui é o lugar onde seus heróis ganham vida.
        </P>
        <P>
          No Hero's Lair, oferecemos uma experiência de compra única, com uma vasta gama de itens que vão desde figuras de ação e action figures até roupas e acessórios que fazem qualquer geek se sentir parte de seu universo favorito. Cada produto é escolhido com cuidado para garantir que você tenha acesso às melhores e mais épicas coleções, representando as marcas e personagens mais icônicos.
        </P>
        <P>
          Além de nossos produtos de alta qualidade, nossa loja oferece um ambiente acolhedor para todos os tipos de geeks. É o local perfeito para se reunir com amigos, discutir teorias sobre o próximo filme da Marvel, trocar ideias sobre o último lançamento de jogos ou simplesmente encontrar aquele item que você está buscando há anos.
        </P>
        <P>
          Hero's Lair é o local de todos os heróis e vilões, para aqueles que sabem que ser geek não é apenas sobre o que você assiste, mas sobre quem você é. Venha fazer parte da nossa comunidade, onde a paixão por tudo que é nerd e geek é celebrada diariamente.
        </P>
      </TextContainer>
      <Image>
        <Img
          src="/images/heros.png" 
          alt="Imagem da Hero's Lair"
        />
      </Image>
    </Div>
  );
};

export default Sobre;
