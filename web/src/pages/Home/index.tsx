import { HomeContainer } from "./styles";

import { Presentation } from "./sections/Presentation";
import { QualityServices } from "./sections/QualityServices";
import { RecentWorks } from "./sections/RecentWorks";

import { Header } from "@/components/Header";
import { NavigationScroll } from "@/components/NavigationScroll";
import { ScrollProgress } from "@/components/ScrollProgress";

import { useState } from "react";
import { Skills } from "./sections/Habilitys";
import { WorkForm } from "./sections/WorkForm";


export function Home() {
  const [ menuIsOpen, setMenuIsOpen ] = useState<boolean>(false);


  function onChangeMenu() {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
    return;
  };


  return(
    <HomeContainer>
      
      <Header
        menuIsOpen={menuIsOpen}
        onChangeMenu={onChangeMenu}
      />

      <NavigationScroll
        menuIsOpen={menuIsOpen}
      />

      <Presentation/>
      <QualityServices/>
      <RecentWorks/>
      <Skills/>
      <WorkForm/>

      <ScrollProgress
        id="scroll-circle-progress"
      />

    </HomeContainer>
  );
};