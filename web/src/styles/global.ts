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
  
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    
    -webkit-touch-callout: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
  
  body, input, text-area, button {
    font-size:  ${props => props.theme["font-size"].xsm};
    font-family: ${props => props.theme["font-family"].default};
    font-weight: ${props => props.theme["font-weight"].regular};
    
    color: ${props => props.theme.colors["white-100"]};
  }
`;