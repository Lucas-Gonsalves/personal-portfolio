import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Routes } from "./routes";


export function App() {

  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Routes/>
    </ThemeProvider>
  );
};