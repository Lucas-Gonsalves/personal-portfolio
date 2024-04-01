import styled from "styled-components";

export const ButtonSendContainer = styled.button`
  width: max-content;
  cursor: pointer;

  padding: 1.7rem 3rem;

  border-radius: 10rem;
  border: none;

  font-size: ${props => props.theme["font-size"].xs};
  font-weight: ${props => props.theme["font-weight"].bold};
  line-height: 1;

  color: ${props => props.theme.colors["white-100"]};
  box-shadow: 4px 2px 6px rgba(-1, -1, 0, 0.3);
  
  background-size: 200%;
  background-image: linear-gradient(to right, #62408c 0%, #2a1454 51%, #62408c 100%);
  transition: background-position 0.6s ease, box-shadow 0.6s ease;


  &:hover {
    background-position: -100%;
    box-shadow: -4px 3px 6px rgba(-1, -1, 0, 0.3);
    color: ${props => props.theme.colors["white-100"]};
  }
  

  &:disabled {
    opacity: .8;
    cursor: not-allowed;
  }
`;
