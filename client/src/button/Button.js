import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
   --btn-bg: var(--btn-color, #D9AD77);
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0 1rem;
  border: 2px solid white;
  background: var(--btn-bg);
  align-self: center;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  margin-bottom: 20px;
  &:hover{
    color: var(---btn-bg);
    background-color: white;
  }
`;

export default function Button ({ children, func }){

    return <StyledButton onClick={func}>{children}</StyledButton>
}