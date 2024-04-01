import { ButtonNetworkSet, ImageProfileContainerDesktop, ImageProfileContainerMobile, OverlayBackground, OverlayImageBackground, PresentationContainer, TitleContent } from "./styles";

import ImageWelcomeTextBackground from "@/assets/presentation/image-welcome-background.svg"
import LucasGonsalvesImage from "@/assets/presentation/lucas-gonçalves-image.png"

import { HiOutlineDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { Header } from "@/components/Header";
import { NavigationScroll } from "@/components/NavigationScroll";

import { useState } from "react";
import { ButtonReceive } from "@/components/ButtonReceive";
import { ButtonNetWork } from "@/components/ButtonNetwork";


export function Presentation() {
  const [ menuIsOpen, setMenuIsOpen ] = useState<boolean>(false);


  function onChangeMenu() {
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
    return;
  };


  return (
    <PresentationContainer>

      
      <Header
        data-menu-is-open={menuIsOpen}
        onChangeMenu={onChangeMenu}
      />

      <NavigationScroll
        data-menu-is-open={menuIsOpen}
      />

      <OverlayBackground/>
      <img src={ImageWelcomeTextBackground} />
   
      <TitleContent>
        <div>
          <h2>Lucas Gonçalves</h2>
          <h1>Desenvolvedor Full-Stack</h1>

          <ImageProfileContainerMobile>
            <img src={LucasGonsalvesImage} />
            <OverlayImageBackground/>
          </ImageProfileContainerMobile>

          <p>
            Abordo desafios complexos da experiência do usuário com criatividade, 
            desenvolvendo soluções inovadoras que transcendem o convencional e conectam bilhões de pessoas 
            de maneira autêntica
          </p>

          <ButtonReceive
            title="Baixar CV"
            icon={HiOutlineDownload}
          />

          <ButtonNetworkSet>
            <ButtonNetWork
              icon={FaLinkedinIn}
            />

            <ButtonNetWork
              icon={FaGithub}
            />
          </ButtonNetworkSet>
        </div>

        <ImageProfileContainerDesktop>
          <img src={LucasGonsalvesImage} />
          <OverlayImageBackground/>
        </ImageProfileContainerDesktop>

      </TitleContent>

    </PresentationContainer>
  );
};