import { 
  
  HeaderContainer, 
  ContactMailLink, 
  MenuScroll, 
  NavigationButton, 

} from "./styles";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { NavigationBar } from "../NavigationBar";

import { ButtonSend } from "../ButtonSend";
import { useEffect, useState } from "react";
import { ButtonLogoLayout } from "../ButtonLogoLayout";


interface HeaderProps {
  isScrollInitial?: boolean;
  menuIsOpen: boolean;
  onChangeMenu: () => void;
};


export function Header({ 

  menuIsOpen = false,
  onChangeMenu = () => {},

}: HeaderProps) {

  const [ scrollProgress, setScrollProgress ] = useState(0);

  function handleScroll() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100: 0;
    
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const isScrollInitial = scrollProgress <= 0;


  function handleOnChangeMenu(): void {
    onChangeMenu();
    return;
  };

  const sections = [
    "Sobre",
    "Serviços", 
    "Projetos", 
    "Habilidades", 
    "Contato",
  ];


  return(
    <HeaderContainer
      data-is-scroll-initial={isScrollInitial}
    >
    
      <ContactMailLink>
        <ButtonLogoLayout/>

        <a>lucasluz1710@gmail.com</a>
      </ContactMailLink>


      <NavigationButton>
        <NavigationBar
          sections={sections}
        />

        <ButtonSend
          title="Contate-me"
        />
      </NavigationButton>


      <MenuScroll
        onClick={() => handleOnChangeMenu()}
      >
        {menuIsOpen ? <HiXMark/> : <HiOutlineMenuAlt3/>}
      </MenuScroll>

    </HeaderContainer>
  );
};