import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    background-color: #fff;
    font-family: 'Roboto Mono', monospace;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color:#000;
}

button {
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #2748d6;
    padding: 0.7rem 0.9rem;
    font-family: inherit;
    cursor: pointer;
  }

`


export default GlobalStyle;