import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;

    box-sizing: border-box;

    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors["purple-100"]} ${props => props.theme.colors["purple-200"]};
    scroll-behavior: smooth;
  }

  :root {
    font-size: 62.5%;
  }
  
  html {
  }

  body {

    background: ${props => props.theme.colors["black-100"]};
    
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    
    -webkit-touch-callout: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;

    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 11px;
      height: 20rem;
      background: ${props => props.theme.colors["purple-100"]};
    }

    &::-webkit-scrollbar-corner,
    &::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors["purple-200"]};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors["purple-100"]};
      background-clip: padding-box;
      border: 2px solid transparent;
    }

    &::-webkit-scrollbar-button:single-button {
      height: 12px;
      width: 10px;

      display: block;
      
      background-color: ${props => props.theme.colors["purple-200"]};
      background-repeat: no-repeat;
      background-size: 15px;

      background-position: center -1px;
    }

    &::-webkit-scrollbar-button:single-button:vertical:decrement {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%238750f7'><path d='m7 14 5-5 5 5H7z' stroke-width='2'/></svg>");
    }

    &::-webkit-scrollbar-button:single-button:vertical:increment {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' fill='%238750f7'><path d='m7 10 5 5 5-5H7z' stroke-width='2'/></svg>");
    }
  }
  
  body, input, text-area, button {
    font-size:  ${props => props.theme["font-size"].xsm};
    font-family: ${props => props.theme["font-family"].default};
    font-weight: ${props => props.theme["font-weight"].regular};
    
    color: ${props => props.theme.colors["white-100"]};
  }

  img, svg {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;