import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 6rem;

  display: flex;
  align-items: center;

  padding: 2rem;
  background: transparent;

  position: relative;
  z-index: 0;

  button {
    min-width: max-content;
    width: max-content;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 2rem 4rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    padding: 4rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xxg}) {
    padding: 4rem 14rem;
  }
`;

export const ContactMailLink = styled.div`
  width: max-content;

  display: flex;
  align-items: center;

  gap: 1.6rem;

  svg {
    width: 5rem;
    height: 5rem;

    color: ${props => props.theme.colors["white-100"]};
  }

  a {
    display: none;
    font-size:  ${props => props.theme["font-size"].xs};
    font-weight:  ${props => props.theme["font-weight"].medium};
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