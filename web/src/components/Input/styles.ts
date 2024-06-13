import styled from "styled-components";


export const InputContainer = styled.input`
  width: 100%;

  outline: none;

  padding: 1.4rem 2rem;
  border-radius: 8px;

  font-weight: ${props => props.theme["font-weight"].light};
  font-size: ${props => props.theme["font-size"].m};

  caret-color: ${props => props.theme.colors["white-100"]};

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors["gray-400"]};

  background: ${props => props.theme.colors["black-100"]};
  transition: .6s ease;

  &::placeholder {
    color: ${props => props.theme.colors["gray-100"]};
  }

  &:focus {
    transition: .6s ease;
    border: solid 1px ${props => props.theme.colors["purple-100"]};
  }
`;