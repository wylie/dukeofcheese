import styled, { createGlobalStyle } from "styled-components";

import bgImg from "./assets/bg-tile.png";

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #444;
    background-image: url(${bgImg});
    font: 1em/1em Helvetica, Arial, sans-serif;
    color: #ccc;
    line-height: 1.5;
  }

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background-color: #555;
    margin: 0;
  }
`

export const Wrap = styled.div`
  max-width: 350px;
  min-width: 225px;
  padding: 0 5px 20px;
  margin: auto;
  text-align: center;  
`;
