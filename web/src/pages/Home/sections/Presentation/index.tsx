import { 

  ButtonNetworkSet,
  ImageProfileContainerDesktop,
  ImageProfileContainerMobile,
  OverlayBackground,
  OverlayImageBackground,
  PresentationContainer, 
  TitleContent, 
  ArrowDownPresentation,
  ButtonReceiveSet,

} from "./styles";

import ImageWelcomeTextBackground from "@/assets/presentation/image-welcome-background.svg";
import LucasGonsalvesImage from "@/assets/presentation/lucas-gonçalves-image.png";
import MdKeyboardDoubleArrow from "@/assets/icons/keyboard-double-arrow-down.svg";

import { HiOutlineDownload } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { ButtonReceive } from "@/components/ButtonReceive";
import { ButtonNetWork } from "@/components/ButtonNetwork";

interface PresentationProps {
  id?: string;
}

export function Presentation({
  id = "",
}: PresentationProps) {

  return (
    <PresentationContainer
      id={id}
    >

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
            de maneira autêntica.
          </p>

          <ButtonReceiveSet>  
            <ButtonReceive
              title="Baixar CV"
              icon={HiOutlineDownload}
            />

            <ButtonNetworkSet>
              <ButtonNetWork
                icon={FaLinkedinIn}
                target="_blank"
                href="https://www.linkedin.com/in/lucas-gon%C3%A7alves-da-luz-498425276/"
              />

              <ButtonNetWork
                icon={FaGithub}
                target="_blank"
                href="https://github.com/Lucas-Gonsalves"
              />
            </ButtonNetworkSet>
          </ButtonReceiveSet>
        </div>

        <ImageProfileContainerDesktop>
          <img src={LucasGonsalvesImage} />
          <OverlayImageBackground/>
        </ImageProfileContainerDesktop>

      </TitleContent>

      <ArrowDownPresentation>
        <img src={MdKeyboardDoubleArrow} />
      </ArrowDownPresentation>

    </PresentationContainer>
  );
};