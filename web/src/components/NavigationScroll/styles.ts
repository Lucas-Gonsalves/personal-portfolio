import styled from "styled-components";
import { NavigationScrollProps } from ".";


interface NavigationScrollContainerProps extends NavigationScrollProps {};


export const NavigationScrollContainer = styled.nav<NavigationScrollContainerProps>`
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 1;

  background: rgba(42, 20, 84, 0.5);
  backdrop-filter: blur(10px);

  transform: ${props => props["data-menu-is-open"] ? "scaleY(1)" : "scaleY(0)"};
  transform-origin: top;

  transition: transform .3s;

  ul {
    display: flex;
    flex-direction: column;

    align-items: center;
    
    margin-top: 3.5rem;
    gap: 3.5rem;
    
    text-align: center;
    list-style: none;
    
    li {
      cursor: pointer;
      font-size: ${props => props.theme["font-size"].exm};
      transition: .3s;
    }

    li:active {
      transition: .3s;
      transform: scale(1.15);
      opacity: .75;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    height: calc(90vh - 9rem);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    display: none;
  }
`;