import styled from "styled-components";


export const InputContainer = styled.input`
  width: 100%;

  outline: none;

  padding: 1.3rem 1.4rem;
  border-radius: 8px;

  font-weight: ${props => props.theme["font-weight"].light};
  font-size: ${props => props.theme["font-size"].xxs};

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
    border-color: ${props => props["aria-invalid"] ? props.theme.colors["red-100"] : props.theme.colors["purple-100"]};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px ${props => props.theme.colors["black-100"]} inset;
    -webkit-text-fill-color: ${props => props.theme.colors["white-100"]};
    transition: background-color 5000s ease-in-out 0s;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    font-size: ${props => props.theme["font-size"].mxs};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 1.3rem 1.6rem;
    font-size: ${props => props.theme["font-size"].xxs};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    padding: 1.4rem 1.8rem;
    font-size: ${props => props.theme["font-size"].m};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {    
    padding: 1.4rem 2rem;
  }
`;