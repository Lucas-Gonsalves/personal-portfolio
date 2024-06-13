import styled from "styled-components";


interface ButtonHoverBackgroundProps {
  "data-current-width": number;
  "data-current-x-position": number;
}



export const CardWorkSelectorContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4rem;
`;


export const CardsContainer = styled.ul`
  max-width: 124.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  
  list-style: none;
  position: relative;

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    gap: 3rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {
    gap: 4rem;
  }
`;


export const NavigationContainer = styled.nav`
  max-width: max-content;

  overflow-x: hidden;
  
  padding: 1.2rem;
  border-radius: 100px;
  
  background: ${props => props.theme.colors["black-100"]};
  
  z-index: 0;
  position: relative;

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    padding: 1.4rem;
  }
    
  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 1.6rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    padding: 2rem;
  }

`;

export const NavigationContent = styled.ul`
  list-style: none;

  display: flex;
  gap: 1.85rem; 

    
  li {
    position: relative;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    gap: 2.2rem;
  }
    
  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    gap: 3rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    gap: 3.6rem;
  }
`;


export const ButtonNavigation = styled.button`
  width: max-content;
  
  background: none;
  outline: none;
  border: none;
  
  cursor: pointer;

  position: relative;
  z-index: 0;

  font-size: ${props => props.theme["font-size"].xss};

  transition: .3s ease;

  &:not(:hover):not(:active):focus:before 
  {
    width: 100%;

    transition: .6s ease;
  }

  &::before {
    content: "";

    width: 0%;
    height: 1px;

    position: absolute;
    z-index: 1;

    left: 50%;
    top: 100%;

    transform: translate(-50%);

    border-radius: 8px;

    background: ${props => props.theme.colors["purple-100"]};

    transition: .6s ease;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    font-size: ${props => props.theme["font-size"].m};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    font-size: ${props => props.theme["font-size"].xsm};
  }
`; 
  
export const ButtonHoverBackground = styled.div<ButtonHoverBackgroundProps>`
  width: ${props => `calc(${props["data-current-width"]}px + 20px)`};
  height: 100%;

  position: absolute;
  z-index: -1;

  left: ${props => `calc(${props["data-current-x-position"]}px - 10px)`};
  top: 0;

  transition: .6s ease;
  border-radius: 100px;

  background: linear-gradient(to right, #8750f7 0%, #2a1454 100%);

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    width: ${props => `calc(${props["data-current-width"]}px + 25px)`};
    left: ${props => `calc(${props["data-current-x-position"]}px - 12.5px)`};
  }
    
  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    width: ${props => `calc(${props["data-current-width"]}px + 30px)`};
    left: ${props => `calc(${props["data-current-x-position"]}px - 15px)`};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    width: ${props => `calc(${props["data-current-width"]}px + 40px)`};
    left: ${props => `calc(${props["data-current-x-position"]}px - 20px)`};
  }
`;