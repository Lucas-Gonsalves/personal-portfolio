import styled from "styled-components";


interface HeaderContainerProps {
  "data-is-scroll-initial"?: boolean;
};


export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  
  display: flex;
  align-items: center;
  
  position: fixed;
  z-index: 1;
  top: 0;

  padding-left: 2rem;
  padding-right: 2rem;

  padding-top: 2rem;
  padding-bottom: 2rem;
  
  background: ${props => props["data-is-scroll-initial"] ? "transparent" : props.theme.colors["black-100"]};
  box-shadow: ${props => props["data-is-scroll-initial"] ? "0 0 30px rgba(135, 80, 247, 0)" : "0 0 30px rgba(135, 80, 247, 0.2)"};
  
  transition: 
  background .6s ease-in-out,
  padding .6s ease-in-out;
  
  button {
    min-width: max-content;
    width: max-content;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    
    ${props => props["data-is-scroll-initial"] 
    ? 
    "padding-top: 4rem; padding-bottom: 4rem;" 
    : 
    "padding-top: 2rem; padding-bottom: 2rem;"}

    padding-left: 4rem;
    padding-right: 4rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {

    padding-left: 4rem;
    padding-right: 4rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xgg}) {

    padding-left: 12rem;
    padding-right: 12rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xxg}) {

    padding-left: 18rem;
    padding-right: 18rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].exg}) {

    padding-left: 24rem;
    padding-right: 24rem;
  }
`;


export const Logo = styled.div`

  position: relative;
  z-index: 0;

  -webkit-user-drag: none;
  user-select: none;

  cursor: pointer;

  #logo-backwards {
    opacity: 0;
    
    position: absolute;
    z-index: -1;

    margin-left: -100%;
  }

  #logo-square {
    opacity: 0;
    
    position: absolute;
    z-index: -2;

    margin-left: -100%;
  }

  &:hover {
    #logo-backwards {
      opacity: 1;
    }

    img {
      transform: scale(0.86);
      box-shadow: 0 0 12px rgba(254, 254, 254, 0.8);
    }
  }

  &:active {
    #logo-backwards, #logo {
      opacity: 0;
    }
    
    #logo-square {
      opacity: 1;
    }
    
    img {
      box-shadow: 0 0 12px rgba(135, 80, 247);

      transition: transform 2s ease-out, box-shadow .6s ease, opacity .6s ease; 
      transform: rotate(135deg) scale(0.86);
    }
  }

  img {
    width: 5rem;
    height: 5rem;
    
    color: ${props => props.theme.colors["white-100"]};
    transition: transform 2s ease-out, box-shadow .6s ease, opacity .6s ease; 

    box-shadow: -3px 3px 6px rgba(254, 254, 254, 0.8);
    
    &:hover {
      transition: transform 2s ease-out, box-shadow .6s ease, opacity .6s ease; 
    }
  }
`;

export const LogoHover = styled.img`
  width: 5rem;
  height: 5rem;

  color: ${props => props.theme.colors["white-100"]};

  cursor: pointer;
`;

export const ContactMailLink = styled.div`
  width: max-content;

  display: flex;
  align-items: center;

  gap: 1.6rem;

  a {
    display: none;
    cursor: pointer;

    color: ${props => props.theme.colors["white-200"]};
    font-size:  ${props => props.theme["font-size"].m};
    font-weight:  ${props => props.theme["font-weight"].medium};

    transition: .3s ease;

    &:hover {
      transition: .3s ease;
      color: ${props => props.theme.colors["white-100"]};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    
    a {
      display: block;
    }
  }
`;


export const NavigationButton = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;

  nav {
    margin-right: 2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    margin: 0 0 0 auto;
  }
`;


export const MenuScroll = styled.button`
  width: min-content;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  cursor: pointer;
  transition: .3s ease;

  svg {
    width: 5rem;
    height: 5rem;

    color: ${props => props.theme.colors["white-100"]};
  }

  &:hover {
    opacity: .8;
    transition: .3s ease;
    transform: scale(.95);
  }

  &:active {
    transition: .1s ease;
    transform: scale(1.05);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    margin-left: 2rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    display: none;
  }
  
`;