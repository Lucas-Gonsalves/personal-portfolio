import { FooterContainer } from "./styles";

import logoSquareWhiteAndPurple from "@/assets/logos/square-white-purple.svg";

import { NavigationBar } from "../NavigationBar";


export function Footer() {

  const currentDate = new Date().getFullYear().toString();

  const sections = [ 
    "Sobre",
    "Serviços", 
    "Projetos", 
    "Habilidades", 
    "Contato",
  ];


  return (
    <FooterContainer>

      <img src={logoSquareWhiteAndPurple} />
      <NavigationBar
        sections={sections}
        readScrollProgress={false}
      />
      <p>© { currentDate } Todos os direitos reservados por <a>Lucas Gonçalves</a></p>

    </FooterContainer>
  );
};