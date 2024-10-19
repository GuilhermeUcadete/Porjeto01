import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const SocialTitle = styled.h2`
  font-size: 1.5rem;
  color: #666;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const ContactItem = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 30px;
  margin-right: 10px;
  vertical-align: middle;
`;

const Contato = () => {
  return (
    <Container>
      <Title>Quaisquer dúvidas, entre em contato:</Title>

      <ContactItem>
        <Icon
          src="/images/icon-whatsapp.png" 
          alt="Logo WhatsApp"
        />
        WhatsApp: +55 11 9333-9333
      </ContactItem>

      <ContactItem>
        <Icon
          src="/images/icon-gmail.png" 
          alt="Logo Gmail"
        />
        Email: heroslair@gmail.com
      </ContactItem>

      <ContactItem>
        <Icon
          src="/images/icon-telefone.png"
          alt="Logo Telefone"
        />
        Telefone: +55 11 4002-8922
      </ContactItem>

      <SocialTitle>Siga-nos nas redes sociais:</SocialTitle>

      <ContactItem>
        <Icon
          src="/images/icon-instagram.png" 
          alt="Logo Instagram"
        />
        Instagram: @Heros_Lair
      </ContactItem>

      <ContactItem>
        <Icon
          src="/images/icon-facebook.png"
          alt="Logo Facebook"
        />
        Facebook: /Heros_Lair
      </ContactItem>
    </Container>
  );
};

export default Contato;
