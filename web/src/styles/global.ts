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
    -webkit-font-smoothing: antialiased;
  }
`;