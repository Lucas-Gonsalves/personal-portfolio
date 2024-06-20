import styled from "styled-components";


interface HoverBackgroundProps {
  "data-hover-height"?: number;
  "data-hover-y-position"?: number;
};

interface ServiceTopicProps {
  "data-topic-is-focus"?: boolean;
};


export const ServiceSelectorContainer = styled.ul`
  width: 100%;

  height: max-content;
  min-height: max-content;
  
  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;

  transition: all .8s ease;

  > li {
    list-style: none;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    user-select: none;
      
    position: relative;
    z-index: 0;

    &::after {
      content: "";
      width: 100%;
      height: 1px;

      background: ${props => props.theme.colors["purple-200"]};
    }
  }
`;


export const HoverBackground = styled.div<HoverBackgroundProps>`

  width: 100%;
  height: ${props => props["data-hover-height"]}px;

  position: absolute;
  z-index: -1;

  pointer-events: none;
  top: ${props => props["data-hover-y-position"]}px;

  left: 50%;

  transform: translate(-50%); 
  transition: all .6s ease;

  background-image: linear-gradient(to right, #8750f7 0%, #2a1454 100%);
`;


export const ServiceTopic = styled.div<ServiceTopicProps>`
  display: flex;
  flex-direction: column;

  touch-action: manipulation;
  align-items: center;

  padding: 2rem 1.5rem;
  gap: 1.5rem;
  
  p {
    font-size: ${props => props.theme["font-size"].xsm};
    
    line-height: ${props => props.theme["line-height"].common};
    color: ${props => props.theme.colors["white-200"]};
  }

  svg {
    transition: all .8s ease;

    color: ${props => props["data-topic-is-focus"] ? props.theme.colors["white-100"] : props.theme.colors["purple-100"]}; 
    transform: ${props => props["data-topic-is-focus"] ? "rotate(-90deg)" : "rotate(0deg)"};
  }
  
  > svg {
    min-width: 3rem;
    min-height: 3rem;

    display: none;
  }

  > div {
    width: 100%;

    display: flex;
    align-items: center;

    gap: 1rem;
    justify-content: space-between;

    span {
      color: ${props => props["data-topic-is-focus"] ? props.theme.colors["white-100"] : props.theme.colors["purple-100"]}; 
    }

    svg {
      min-width: 2.7rem;
      min-height: 2.7rem;
    }
  }


  &:hover, &:active {
    transition: all .8s ease;
    
    svg {
      transform: rotate(-90deg);
      color: ${props => props.theme.colors["white-100"]};
    }

    > div span {
      color: ${props => props.theme.colors["white-100"]};
    }
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    flex-direction: row;
    justify-content: space-between;

    padding: 2rem 1.5rem;
    gap: 4rem;

    > svg {
      display: block;
    }

    p {
      max-width: 53.6rem;
    }

    > div {
      max-width: max-content;
      min-width: auto;


      svg {
        display: none;
      }
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    padding: 3rem 2.5rem;

    gap: 5rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xgg}) {
    padding: 3rem 3.5rem;
  }
`;


export const TopicTitle = styled.div`

  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    transition: all .8s ease;

    font-weight: ${props => props.theme["font-weight"].bold};
    font-size: ${props => props.theme["font-size"].xmd};
  }    

  h3 {
    min-width: max-content;
    font-size: ${props => props.theme["font-size"].xmd};
    font-weight: ${props => props.theme["font-weight"].bold};
  }


  h3, span {
    pointer-events: none;
    text-align: start;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    min-width: 28.8rem;

    gap: 2rem;

    h3 {
      font-size: ${props => props.theme["font-size"].xg};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xlg}) {
    min-width: 34.7rem;

    h3 {
      font-size: ${props => props.theme["font-size"].xxg};
    }
  }
`;