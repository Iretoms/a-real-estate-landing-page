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

`


export default GlobalStyle;