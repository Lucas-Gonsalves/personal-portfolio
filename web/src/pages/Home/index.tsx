import { HomeContainer } from "./styles";

import { Presentation } from "./sections/Presentation";
import { QualityServices } from "./sections/QualityServices";
import { RecentWorks } from "./sections/RecentWorks";

import { Header } from "@/components/Header";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ScrollProgress } from "@/components/ScrollProgress";

import { useState } from "react";
import { Skills } from "./sections/Skills";
import { WorkForm } from "./sections/WorkForm";
import { Footer } from "@/components/Footer";


export function Home() {
  const [ menuIsOpen, setMenuIsOpen ] = useState<boolean>(false);

  function onChangeMenu() {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
    return;
  };

  const sections = [
    "Sobre", 
    "Serviços", 
    "Projetos", 
    "Habilidades", 
    "Contato"
  ];

  return(
    <HomeContainer>
    
      <Header
        menuIsOpen={menuIsOpen}
        onChangeMenu={onChangeMenu}
      />

      <NavigationMenu
        menuIsOpen={menuIsOpen}
        onChangeMenu={onChangeMenu}
        sections={sections}
      />

      <Presentation id="Sobre"/>
      <QualityServices id="Serviços"/>
      <RecentWorks id="Projetos"/>
      <Skills id="Habilidades"/>
      <WorkForm id="Contato"/>

      <Footer/>

      <ScrollProgress
        id="scroll-circle-progress"
      />

    </HomeContainer>
  );
};