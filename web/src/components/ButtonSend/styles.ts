import styled from "styled-components";

export const ButtonSendContainer = styled.button`
  width: max-content;
  cursor: pointer;

  padding: 1.7rem 3rem;

  border-radius: 10rem;
  border: none;

  outline: none;

  font-size: ${props => props.theme["font-size"].m};
  font-weight: ${props => props.theme["font-weight"].bold};
  line-height: 1;

  color: ${props => props.theme.colors["white-200"]};
  box-shadow: 4px 2px 6px rgba(-1, -1, 0, 0.3);
  
  background-size: 200%;
  background-image: linear-gradient(to right, #62408c 0%, #2a1454 51%, #62408c 100%);
  transition: background-position .6s ease, box-shadow .6s ease, color .6s ease;

  &:hover, &:focus {
    background-position: -100%;
    box-shadow: -4px 3px 6px rgba(-1, -1, 0, 0.3);
    color: ${props => props.theme.colors["white-100"]};

    transition: background-position .6s ease, box-shadow .6s ease, color .6s ease;
  }
  
  &:disabled {
    opacity: .8;
    cursor: not-allowed;
  }
`;
