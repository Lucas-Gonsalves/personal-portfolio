import styled from "styled-components";


export const ButtonNetWorkContainer = styled.button`
  width: 4.4rem;
  height: 4.4rem;

  cursor: pointer;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;

  border-color: ${props => props.theme.colors["purple-100"]};
  border-width: 1px;
  border-style: solid;

  border-radius: 50%;

  svg {
    width: 2.0rem;
    height: 2.0rem;
    transition: .4s ease;

    color: ${props => props.theme.colors["purple-100"]};
  }

  &:hover, &:focus {
    transition: .4s ease;
    
    svg {
      color: ${props => props.theme.colors["white-100"]};
    }

    div {
      transform: scale(1);
    }
  }
`;


export const ButtonNetWorkHoverBackground = styled.div`
  width: 100%;
  height: 100%;
  
  transform: scale(0);
  transition: .4s ease;

  border-radius: 50%; 

  position: absolute;
  z-index: -1;

  background: ${props => props.theme.colors["purple-100"]};
`;