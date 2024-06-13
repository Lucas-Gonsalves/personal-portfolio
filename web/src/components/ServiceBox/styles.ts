import styled, { css } from "styled-components";

interface SelectorProps {
  "data-height-position"?: string;
}

interface ServiceTopicProps {
  "data-current-focus"?: boolean;
}


const hoverTopicStyle = css`
  transition: all .8s ease;

  > div {
      
    span {
      color: ${props => props.theme.colors["white-100"]};
    }
  
    svg {
      transform: rotate(-90deg);
      color: ${props => props.theme.colors["white-100"]};
    }
  } 
`;

export const ServiceBoxContainer = styled.ul`
  width: 100%;

  height: max-content;
  min-height: max-content;
  
  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;

  transition: all .8s ease;
`;

export const Selector = styled.div<SelectorProps>`
  content: "";

  width: 100%;
  height: 100%;

  position: absolute;
  z-index: -1;

  pointer-events: none;
  top: ${props => props["data-height-position"]};

  left: 50%;

  transform: translate(-50%); 
  transition: all .6s ease;

  background-image: linear-gradient(to right, #8750f7 0%, #2a1454 100%);
`;

export const ServiceTopic = styled.li<ServiceTopicProps>`
  list-style: none;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  user-select: none;
    
  position: relative;
  z-index: 0;

  ${(props) => props["data-current-focus"] ? hoverTopicStyle : "" }

  &::after {
    content: "";
    width: 100%;
    height: 1px;

    background: ${props => props.theme.colors["purple-200"]};
  }
`;

export const ServiceTopicContent = styled.div`
  display: flex;
  flex-direction: column;

  touch-action: manipulation;
  align-items: center;

  padding: 2rem 1.5rem;
  gap: 1.5rem;

  
  p, div span, div h3 {
    pointer-events: none;
    text-align: start;
  }
  
  p {
    font-size: ${props => props.theme["font-size"].xsm};
    
    line-height: ${props => props.theme["line-height"].common};
    color: ${props => props.theme.colors["white-200"]}; 
  }
  
  svg {
    min-width: 3rem;
    min-height: 3rem;
    color: ${props => props.theme.colors["purple-100"]}; 

    transition: all .8s ease;
  }

  > svg {
    display: none;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    flex-direction: row;
    justify-content: space-between;

    padding: 2rem 1.5rem;
    gap: 3rem;

    > svg {
      display: block;
    }

    p {
      max-width: 53.6rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    padding: 2rem 1.5rem;
    gap: 4rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    padding: 3rem 2.5rem;

    gap: 5rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xgg}) {
    padding: 3rem 3.5rem;
  }

`;

export const ServiceTopicTitle = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 1rem;
  justify-content: space-between;

  svg {
    min-width: 2.7rem;
    min-height: 2.7rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    max-width: max-content;
    min-width: auto;

    svg {
      display: none;
    }
  }
`;

export const ServiceTopicTitleContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    min-width: max-content;
    font-size: ${props => props.theme["font-size"].xmd};
    font-weight: ${props => props.theme["font-weight"].bold};
  }

  span {
    transition: all .8s ease;
    color: ${props => props.theme.colors["purple-100"]}; 

    font-weight: ${props => props.theme["font-weight"].bold};
    font-size: ${props => props.theme["font-size"].xmd};
  }    


  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    width: 27rem;
    gap: 2rem;

    h3 {
      font-size: ${props => props.theme["font-size"].xg};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {
    width: 32.9rem;

    h3 {
      font-size: ${props => props.theme["font-size"].xxg};
    }
  }
`;