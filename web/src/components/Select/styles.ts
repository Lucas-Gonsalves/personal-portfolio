import styled from "styled-components";


interface OptionsProps {
  "data-is-select-open"?: boolean;
}


interface SelectedProps {
  "data-is-select-open"?: boolean;
}


export const SelectContainer = styled.div`
  max-width: 100%;
  height: max-content;
`;

export const Selected = styled.button<SelectedProps>`
  width: 100%;

  position: relative;
  z-index: 0;
  
  padding: 1.5rem;
  border-radius: 8px;

  transition: .6s ease;
  cursor: pointer;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-width: 1px;
  border-style: solid;
  border-color: ${props => props["data-is-select-open"] ? props.theme.colors["purple-100"] : props.theme.colors["gray-400"]};
  
  background: ${props => props.theme.colors["black-100"]};

  > input {
    width: 95%;

    cursor: pointer;
    
    background: transparent;
    border: none;

    font-weight: ${props => props.theme["font-weight"].light};
    font-size: ${props => props.theme["font-size"].m};

    outline: none;
    user-select: none;
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;

    margin-right: -.5rem;
    transition: .3s ease;

    color: ${props => props.theme.colors["white-100"]};

    transform: rotate(-180deg) rotate(0deg);
    transform: ${props => props["data-is-select-open"] ?  "rotate(-180deg)" : "rotate(0deg)"};
  }

  &:focus {
    border-color: ${props => props.theme.colors["purple-100"]};
  }
`;

export const Options = styled.div<OptionsProps>`
  max-width: max-content;
  height: max-content;

  cursor: pointer;

  overflow: hidden;
  position: absolute;
  z-index: ${props => props["data-is-select-open"] ? "1": "-1"};
  
  border-radius: 8px;
  margin-top: ${props => props["data-is-select-open"] ? ".4rem": "-3%"};
  
  display: flex;
  flex-direction: column;
  transition: .2s ease-in-out;
  
  box-shadow: 0px 0px 8px ${props => props.theme.colors["white-100"]};
  background: ${props => props.theme.colors["white-100"]};
  
  filter: ${props => props["data-is-select-open"] ? "opacity(1)": "opacity(0)"};
  transform: ${props => props["data-is-select-open"] ? "scale(1)": "scale(.5)"};
  
  label {
    cursor: pointer;

    list-style: none;

    font-weight: ${props => props.theme["font-weight"].light};
    font-size: ${props => props.theme["font-size"].mxs};
    
    position: relative;
    z-index: 0;

    user-select: none;

    color: ${props => props.theme.colors["black-300"]};
    padding: 1rem 2rem;
    
    transition: .2s ease;

    &:hover {
      transition: .2s ease;
      background: ${props => props.theme.colors["white-150"]};
    }

    &:has(input:focus) {
      background: ${props => props.theme.colors["white-150"]};
    }
 
    &:has(input:checked) {
      background: ${props => props.theme.colors["white-150"]};
      font-weight: ${props => props.theme["font-weight"].bold};
    }

    > input {
      all: unset;

      position: absolute;
    
      inset: 0;
    }
  }


  @media(min-width: ${props => props.theme["device-breackpoints"].xsm}) {

    label {

      padding: 1.2rem 2.2rem;
      font-size: ${props => props.theme["font-size"].m};
    }
  }
`;