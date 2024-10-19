import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
  text-align: center;
  background-color: #f8d7da;
  color: #721c24;
  padding: 20px;
`;

const ErrorTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const ErrorImage = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>Ops! Página não encontrada.</ErrorTitle>
      <ErrorMessage>Desculpe, não conseguimos encontrar a página que você está procurando.</ErrorMessage>
    </ErrorContainer>
  );
};

export default Error;
