import styled from "styled-components";


export const TextareaContainer = styled.textarea`
  width: 100%;
  min-height: 20rem;

  outline: none;
  resize: none;
  
  padding: 1.4rem;
  border-radius: 8px;

  font-weight: ${props => props.theme["font-weight"].light};
  font-size: ${props => props.theme["font-size"].m};

  caret-color: ${props => props.theme.colors["white-100"]};

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props["aria-invalid"] ? props.theme.colors["red-100"] : props.theme.colors["gray-400"]};

  background: ${props => props.theme.colors["black-100"]};
  transition: .6s ease;

  
  &::placeholder {
    color: ${props => props.theme.colors["gray-100"]};
  }

  &:focus {
    transition: .6s ease;
    border: solid 1px ${props => props.theme.colors["purple-100"]};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    font-size: ${props => props.theme["font-size"].mxs};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 1.6rem;
    font-size: ${props => props.theme["font-size"].xxs};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    padding: 1.8rem;
    font-size: ${props => props.theme["font-size"].m};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {    
    padding: 2rem;
  }
`;