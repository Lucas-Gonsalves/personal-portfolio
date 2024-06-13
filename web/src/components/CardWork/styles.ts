import styled, { keyframes } from "styled-components";


interface CardWorkContainerProps {
  "data-hover-title": string;
  "data-hover-description"?: string;
  "data-is-card-preview"?: boolean;
  "data-is-conjunt-animation"?: boolean;
};



const animationBlurNotFocus = keyframes`

  from { filter: opacity(1) blur(0px); }
  to { filter: opacity(0.6) blur(.5px); }
`;

const animationBlurFocus = keyframes`

  from {filter: opacity(0.6) blur(.5px); }
  to { filter: opacity(1) blur(0px); }
`;

const animationHide = keyframes`
  
  from { transform: scale(1); filter: opacity(1) blur(0px); }
  to { transform: scale(0.85); filter: opacity(0.6) blur(1px); }
`;

const animationShow = keyframes`

  from { transform: scale(0.85); filter: opacity(0.6) blur(1px); }
  to { transform: scale(1); filter: opacity(1) blur(0px);}
`;


export const CardWorkContainer = styled.div<CardWorkContainerProps>`
  max-width: 38.2rem;

  margin: 0 auto;

  border-radius: 10px; 
  background: ${props => props.theme.colors["black-400"]};

  animation: 
    ${props => props["data-is-card-preview"] ? animationHide : animationShow} ease .6s forwards, 
    ${props => props["data-is-conjunt-animation"] ? animationBlurFocus : animationBlurNotFocus } ease .6s forwards;

  transition: all .6s ease;

  img {
    width: 100%;
    height: 100%;
    
    transition: all .6s ease;

    border-radius: 2px 2px 0 0;
  }

  &:hover, &:has(a:focus) {
    transition: .3s ease;

    > a {
      bottom: 2rem;
      filter: ${props => (props["data-is-conjunt-animation"] ? "opacity(1)" : "opacity(0)")};
      
      user-select: ${props => (props["data-is-conjunt-animation"] ? "initial" : "none")};
      -webkit-user-drag: ${props => (props["data-is-conjunt-animation"] ? "initial" : "none")};
      pointer-events: ${props => (props["data-is-conjunt-animation"] ? "initial" : "none")};


      cursor: ${props => (props["data-is-conjunt-animation"] ? "pointer" : "default")};
      user-select: ${props => (props["data-is-conjunt-animation"] ? "initial" : "none")};

       div svg {
        transition: .4s ease;
        transform: rotate(450deg);
      }
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    max-width: 46.2rem;
    
    padding: 2rem 2rem 0;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    max-width: 49.75rem;

    padding: 2.4rem 2.4rem 0;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {

    padding: 3rem 3rem 0;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xgg}) {
    max-width: 52.75rem;

    padding: 3.6rem 3.6rem 0;
  }
`;


export const DescriptionHoverContainer = styled.a`
  width: calc(100% - 4rem);
  height: max-content;

  text-decoration: none;
  filter: opacity(0);

  -webkit-user-drag: none;
  outline: none;

  position: absolute;
  z-index: 0;

  cursor: default;
  pointer-events: none;

  user-select: none;

  background: linear-gradient(to right, #8750f7 0%, #2a1454 100%);
  border-radius: 15px;

  left: 2rem;
  bottom: 0;
  padding: 1.5rem;
  
  transition: .3s ease;
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    padding: 2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {
    padding: 2rem;
  }
`;


export const DescriptionHoverContent = styled.div`

  height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  gap: 2rem;
  
  > div {
    
    h3 {
      color: ${props => props.theme.colors["white-100"]};

      margin-bottom: .8rem;
      font-size: ${props => props.theme["font-size"].xss};
    }

    p {
      font-size: ${props => props.theme["font-size"].xs};
      color: ${props => props.theme.colors["white-200"]};
    }
  }

  svg {
    min-width: 2rem;
    min-height: 2rem;

    transition: 1s ease;

    color: ${props => props.theme.colors["white-100"]};
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    
    > div h3 {
      margin-bottom: 1rem;
      font-size: ${props => props.theme["font-size"].m};
    }

    > div p {
      font-size: ${props => props.theme["font-size"].xss};
    }

    svg {
      min-width: 2.6rem;
      min-height: 2.6rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    
    > div h3 {
      margin-bottom: 1rem;
      font-size: ${props => props.theme["font-size"].xm};
    }

    > div p {
      font-size: ${props => props.theme["font-size"].xsm};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {

    
    > div h3 {
      margin-bottom: 1rem;
      font-size: ${props => props.theme["font-size"].m};
    }

    > div p {
      font-size: ${props => props.theme["font-size"].xss};
    }

    svg {
      min-width: 2.4rem;
      min-height: 2.4rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    
    > div h3 {
      margin-bottom: 1rem;
      font-size: ${props => props.theme["font-size"].xm};
    }

    > div p {
      font-size: ${props => props.theme["font-size"].xsm};
    }

    svg {
      min-width: 2.6rem;
      min-height: 2.6rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exg}) {

    gap: 4rem;

    > div h3 {
      margin-bottom: 1.4rem;
      font-size: ${props => props.theme["font-size"].xmd};
    }

    > div p {
      font-size: ${props => props.theme["font-size"].xsm};
    }

    svg {
      min-width: 3rem;
      min-height: 3rem;
    }
  }
`;