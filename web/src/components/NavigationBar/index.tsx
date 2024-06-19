import { useEffect, useState } from "react";
import { ButtonNavigationBar, NavigationBarContainer } from "./styles";


interface NavigationBarProps {
  sections?: string[];
  readScrollProgress?: boolean;
};


export function NavigationBar({

  sections = [],
  readScrollProgress = true,

}: NavigationBarProps) {

  const firstCurrentSection = readScrollProgress ? sections[0] : "";
  const [ currentSection, setCurrentSection ] = useState<string>(firstCurrentSection);


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


  function changeCurrentSection(section: string) {
    if(!readScrollProgress) return;

    setCurrentSection(section);
  };


  function onClickButtonNavigation(
    event: React.MouseEvent<HTMLButtonElement>, 
    section: string
  ) {

    event.currentTarget.blur();

    changeCurrentSection(section);
    goToSection(section);

    return;
  };


  useEffect(() => {

    if(!readScrollProgress) return;

    function handleScroll() {
      const scrollPosition = window.scrollY;

      let activeSection = sections[0];

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {

          const paddingTop = parseInt(window.getComputedStyle(section).paddingTop);
          const sectionTop = section.offsetTop - paddingTop;

          if (scrollPosition >= sectionTop) {
            activeSection = sectionId;
          }

        }
      });

      if (activeSection !== currentSection) {
        setCurrentSection(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection, sections]);


  return (
    <NavigationBarContainer>

      <ul>
        { sections && 
          sections.map(section => (
            <li key={`scroll_bar_section_key_${section}`}>
              <ButtonNavigationBar
                data-is-current-section={section === currentSection}
                onClick={(e) => onClickButtonNavigation(e, section)}
              >
                { section }
              </ButtonNavigationBar>
            </li>
          ))
        }
      </ul>

    </NavigationBarContainer>
  );
};