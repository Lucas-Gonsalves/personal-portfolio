import { HeaderContainer, ContactMailLink, MenuScroll, NavigationButton, Logo } from "./styles";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { NavigationBar } from "../NavigationBar";

import logoL from "@/assets/logos/L-white.svg"
import logoLBackWards from "@/assets/logos/L-white-backwards.svg"
import logoSquarePurple from "@/assets/logos/square-purple.svg"

import { ButtonSend } from "../ButtonSend";

interface HeaderProps {
  "data-menu-is-open": boolean;
  onChangeMenu: () => void;
};


export function Header({ 

  "data-menu-is-open": dataMenuIsOpen,
  onChangeMenu,

}: HeaderProps) {

  function handleOnChangeMenu(): void {
    onChangeMenu();
    return;
  };

  return(
    <HeaderContainer>

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
        {dataMenuIsOpen ? <HiXMark/> : <HiOutlineMenuAlt3/>}
      </MenuScroll>


    </HeaderContainer>
  );
};