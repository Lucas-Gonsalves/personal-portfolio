import { 

  WorkSelectorContainer, 
  CardsContainer,
  ButtonHoverBackground,
  ButtonNavigation,
  NavigationContainer,
  NavigationContent

} from "./styles";

import { CardWork, CardWorkProps } from "../CardWork";

import { useEffect, useRef, useState } from "react";


interface CalculateWidthAndPositionOfHoverBackgroundProps {
  event?: React.MouseEvent<HTMLButtonElement>,
  isInitial?: boolean;
};


interface WorkSelectorProps {
  workCardSections: string[];
  workCardList: CardWorkProps[];
};


export function WorkSelector({
  
  workCardSections = [],
  workCardList = [],

}: WorkSelectorProps) {

  const [ conjuntAnimation, setConjuntAnimation ] = useState<boolean>(false);
  const [ buttonDisabled, setButtonDisabled ] = useState<boolean>(false);

  const [ currentSection, setCurrentSection ] = useState<string>("Tudo");
  const [ workCards, setWorkCards ] = useState<CardWorkProps[] | []>(workCardList); 

  const [ currentButtonHoverWidth, setCurrentButtonHoverWidth ] = useState<number>(0)
  const [ currentButtonHoverX, setCurrentButtonHoverX] = useState<number>(0)

  const navRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  const paddingOfButtonHover = 0;
  const gapOfNavigationContent = 0;
  
  function changeVisibleWorkCards(tag: string) {
    
    if(tag === currentSection) {
      return;
    };

    setConjuntAnimation(true);
    setButtonDisabled(true);
    
    
    setTimeout(() => {
      setConjuntAnimation(false);
    }, 600)

    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000)
    
    if (tag === "Tudo") {
      setTimeout(() => {
        setWorkCards(workCardList)
      }, 600)
      
    } else {
      const sortedWorkCards = [...workCardList].sort((a, b) => {
        const aHasTag = a.tags.includes(tag);
        const bHasTag = b.tags.includes(tag);
        
        if (aHasTag && !bHasTag) return -1;
        if (!aHasTag && bHasTag) return 1;
        return 0;
      });
      
      setTimeout(() => {
        setWorkCards(sortedWorkCards)
      }, 600)
    }
    setCurrentSection(tag);
  };
  
  
  function calculateWidthAndPositionOfHoverBackground({
    
    event,
    isInitial = false,

  }: CalculateWidthAndPositionOfHoverBackgroundProps) {

    const buttonElement = isInitial ? firstButtonRef.current : event?.currentTarget;

    if(!buttonElement) {
      return;
    };

    const {

      width: buttonWidth,
      left: buttonLeftPosition, 

    } = buttonElement.getBoundingClientRect();

    const navRefLeftPosition = navRef.current!.getBoundingClientRect().left;

    const buttonWidthDefinitive = buttonWidth + paddingOfButtonHover;

    const buttonXPosition = buttonLeftPosition - (navRefLeftPosition + gapOfNavigationContent);

    setCurrentButtonHoverWidth(buttonWidthDefinitive);
    setCurrentButtonHoverX(buttonXPosition);
  };


  function onButtonNavigationClick(event: React.MouseEvent<HTMLButtonElement>, tag: string) {
    event.currentTarget.blur()

    calculateWidthAndPositionOfHoverBackground({event});
    changeVisibleWorkCards(tag);
  };


  useEffect(() => {
    calculateWidthAndPositionOfHoverBackground({isInitial: true});
  }, []);


  const workCardListExist = workCardList.length > 0;
  const workCatdSectionsFormated = ["Tudo", ...workCardSections];

  return(
      
    <WorkSelectorContainer>

      <NavigationContainer
        ref={navRef}
      >
        <ButtonHoverBackground
          data-current-width={currentButtonHoverWidth}
          data-current-x-position={currentButtonHoverX}
        />

        <NavigationContent>

          {
            workCatdSectionsFormated.map((section, index) => (

              <li key={`section_work_key_${section}`}>

                <ButtonNavigation
                  ref={index === 0 ? firstButtonRef : undefined}
                  disabled={buttonDisabled}
                  onClick={(e) => onButtonNavigationClick(e, section)}
                >
                  {section}
                </ButtonNavigation>
              </li>
            ))
          }

        </NavigationContent>
      </NavigationContainer>


      <CardsContainer>
        { workCardListExist && 
          
          workCards.map(card => (
              <li
                key={`card_work_key_${card.title}`}
              >
                <CardWork
                  tags={card.tags}
                  imgWork={card.imgWork}
                  imgAlt={card.imgAlt}
                  title={card.title}
                  preview={conjuntAnimation}
                  conjuntAnimation={card.tags.some(tag => tag === currentSection || currentSection === "Tudo")}
                  description={card.description}
                  link={card.link}
                />
              </li>
            ))
        }
      </CardsContainer>

    </WorkSelectorContainer>
  );
};