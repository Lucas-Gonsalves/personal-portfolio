import styled from "styled-components";


export const TopicIconContainer = styled.div`
  max-width: max-content;
  min-height: max-content;


  display: flex;
  align-items: center;
  gap: 1.2rem;

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: .8rem;

    strong {
      color: ${props => props.theme.colors["white-200"]};
      font-weight: ${props => props.theme["font-weight"].regular};
      font-size: ${props => props.theme["font-size"].xss};
    }

    a {
      text-align: start;
      text-decoration: none;

      outline: none;
      cursor: pointer;
      transition: .6s ease;

      color: ${props => props.theme.colors["white-100"]};
      font-weight: ${props => props.theme["font-weight"].medium};
      font-size: ${props => props.theme["font-size"].mxs};
      
      &:hover, &:focus {
        transition: .6s ease;
        color: ${props => props.theme.colors["purple-100"]};
      }

    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {

    div {
      strong {
        font-size: ${props => props.theme["font-size"].m};
      }
      
      a {
        font-size: ${props => props.theme["font-size"].xsm};
      }
    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    gap: 2rem;

    div {
      strong {
        font-size: ${props => props.theme["font-size"].xsm};
      }
      
      a {
        font-size: ${props => props.theme["font-size"].xmd};
      }
    }
  }
`; 


export const IconContainer = styled.button`
  width: max-content;
  height: max-content;

  min-width: 2.2rem;
  min-height: 2.2rem;

  padding: .8rem;

  position: relative;
  z-index: 0;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;

  background: linear-gradient(to  right, #8750f7 0%, #2a1454 100%);
  transition: .3s ease;

  svg {
    min-width: 2.2rem;
    min-height: 2.2rem;

    transition: .3s ease;

    color: ${props => props.theme.colors["white-200"]};
  }

  &::before {
    content: "";
  
    width: 200%;
    height: 110%;

    position: absolute;
    z-index: -1;
    
    transition: .3s ease-in-out;

    background: linear-gradient(to  right, #2a145488 0%, #8750f7 50%, #2a145488 100%);

    left: -80%;
    top: -40%;

    transform: translate(-50%, -50%);
    transform: rotate(45deg);
  }

  &:hover {

    svg {
      transition: .3s ease;
      color: ${props => props.theme.colors["white-100"]};
    }

    &::before {
      transition: .3s ease-in-out;

      left: -17%;
      top: 24%;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 1rem; 
    
    &, svg {
      min-width: 2.4rem;
      min-height: 2.4rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    padding: 1.2rem;
      
    &, svg {
      min-width: 2.8rem;
      min-height: 2.8rem;

    }
  }
`;