import { AnchorHTMLAttributes, useEffect, useState } from "react";
import { NavigationScrollContainer } from "./styles";

export interface NavigationScrollProps {
  menuIsOpen: boolean;
  sections?: string[];
  onChangeMenu: () => void;
};


export function NavigationScroll({ 
  
  sections = [],
  menuIsOpen,
  onChangeMenu,

}: NavigationScrollProps) {


  const [ scrollProgress, setScrollProgress ] = useState(0);

  function handleScroll() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100: 0;
    
    setScrollProgress(progress);
  };

  function goToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    
    if(section) {
      const paddingTop = parseInt(window.getComputedStyle(section).paddingTop);
      const sectionTop = section.offsetTop - paddingTop;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    };

    return;
  };

  function onClickAnchor(
    section: string
  ) {

    setTimeout(() => {
      goToSection(section);
    }, 600)
    onChangeMenu();

    return;
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

        { sections &&
          sections.map(section => (

            <li key={`navigation_scroll_key_${section}`}>
              <a
                onClick={() => onClickAnchor(section)}
              >
                { section.toUpperCase() }
              </a>
            </li>
          ))
        }

      </ul>
    </NavigationScrollContainer>
  );
};