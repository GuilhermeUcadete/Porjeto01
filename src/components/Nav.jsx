import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.8rem;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 40px;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    color: #f0a500;
  }
`;

const Nav = () => {
  return (
    <NavContainer>
      <Logo></Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/contato">Contato</NavLink>
        <NavLink to="/login">Login</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Nav;