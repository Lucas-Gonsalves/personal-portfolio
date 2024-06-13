import { 
  
  HeaderContainer, 
  ContactMailLink, 
  MenuScroll, 
  NavigationButton, 
  Logo, 

} from "./styles";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { NavigationBar } from "../NavigationBar";

import logoL from "@/assets/logos/L-white.svg"
import logoLBackWards from "@/assets/logos/L-white-backwards.svg"
import logoSquarePurple from "@/assets/logos/square-purple.svg"

import { ButtonSend } from "../ButtonSend";
import { useEffect, useState } from "react";


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

  return(
    <HeaderContainer
      data-is-scroll-initial={isScrollInitial}
    >
    
      <ContactMailLink>
        <Logo>
          <img id="logo" src={logoL} />
          <img id="logo-backwards" src={logoLBackWards} />
          <img id="logo-square" src={logoSquarePurple} />
        </Logo>
        <a>lucasluz1710@gmail.com</a>
      </ContactMailLink>


      <NavigationButton>
        <NavigationBar/>

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