import React from "react";
import styled from "styled-components";

const Div=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
background-color: #f0f0f0;
`;

const P=styled.p`
font-size: 1.5rem;
color: #666;
margin-top: 10px;
`;

const H1=styled.h1`
font-size: 3rem;
color: #333;
`;

const Home=()=> {
    return(
        <Div>
        <H1>Hero's Lair</H1>
        <P>Seu esconderijo geek, mais profundo do que nunca.</P>
        </Div>
    );
};

export default Home;

