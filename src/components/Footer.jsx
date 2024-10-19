import React from "react";
import styled from "styled-components";

// Estilizando o container do Footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

// Estilizando o texto do footer
const FooterText = styled.p`
  font-size: 1rem;
  color: #bbb;
  margin: 10px 0;
`;

// Estilizando os links no footer
const FooterLinks = styled.div`
  margin: 10px 0;
`;

const FooterLink = styled.a`
  color: #f0a500;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Meu E-Commerce. Todos os direitos reservados.</FooterText>
      <FooterLinks>
        <FooterLink href="#">Política de Privacidade</FooterLink>
        <FooterLink href="#">Termos de Serviço</FooterLink>
        <FooterLink href="#">Suporte</FooterLink>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
