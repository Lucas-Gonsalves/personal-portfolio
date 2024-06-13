import styled from "styled-components";


interface ScrollProgressStateProps {
  "data-scroll-progress"?: boolean;
};


export const ScrollProgressContainer = styled.div<ScrollProgressStateProps>`

  width: 4.6rem;
  height: 4.6rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  transition: .8s ease-in-out;
  cursor: ${props => props["data-scroll-progress"] ? "pointer" : "auto"};;

  filter: ${props => props["data-scroll-progress"] ? "opacity(.9)" : "opacity(0)"};
  transform: ${props => props["data-scroll-progress"] ? "translateY(0)" : "translateY(1.6rem)"};;

  position: relative;
  z-index: 0;

  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.theme.colors["purple-200"]};

  box-shadow: 0 0 12px rgba(135, 80, 247, 00);

  img {
    width: 2.2rem;
    height: 2.2rem;
  }

  &:hover {
    filter: ${props => props["data-scroll-progress"] ? "opacity(1)" : "opacity(0)"};
    box-shadow: ${props => props["data-scroll-progress"] ? "0 0 12px rgba(135, 80, 247, 0.4)" : "0 0 12px rgba(135, 80, 247, 0.0)"};
    transition: .8s ease;
  }
`;



export const ScrollProgressStateSVG = styled.svg`
  width: 4.6rem;
  height: 4.6rem;

  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%) rotate(-90deg);
  transform-origin: center center;
`;