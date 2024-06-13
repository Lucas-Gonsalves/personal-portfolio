import { useEffect, useState } from "react";
import { NavigationScrollContainer } from "./styles";

export interface NavigationScrollProps {
  menuIsOpen: boolean;
};


export function NavigationScroll({ 
  
  menuIsOpen,

}: NavigationScrollProps) {


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

  return (
    <NavigationScrollContainer
      data-menu-is-open={menuIsOpen}
      data-is-scroll-initial={isScrollInitial}
    >
      <ul>
        <li><a>SERVIÇOS</a></li>
        <li><a>PROJETOS</a></li>
        <li><a>SOBRE</a></li>
        <li><a>HABILIDADES</a></li>
        <li><a>CONTATO</a></li>
      </ul>
    </NavigationScrollContainer>
  );
};