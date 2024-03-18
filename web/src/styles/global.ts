import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${props => props.theme.colors["black-100"]};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, text-area, button {
    font-family: ${props => props.theme["font-family"].default};
  }
`;