import styled from "styled-components";


export const SkillsBackground = styled.section`
  width: 100%;
  height: max-content;

  padding: 6rem 2rem 8rem;

  background: ${props => props.theme.colors["black-200"]};

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 8rem 4rem; 
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xgg}) {
    padding: 8rem 12rem;
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xxg}) {
    padding: 8rem 18rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exg}) {
    padding: 8rem 24rem;
  }
`;



export const TitleContent = styled.div`
  max-width: max-content;
  margin: 0 auto;

  > h2 {
    text-align: center;

    font-size: ${props => props.theme["font-size"].xxg};
    font-weight: ${props => props.theme["font-weight"].bold};
    
    color: transparent;

    background: linear-gradient(to right, rgba(135, 80, 247, 1) 0%, rgba(254, 254, 254, 1) 100%);
    background-clip: text;
  }
  
  > p {
    margin: 1.5rem 0 4rem;
    max-width: 70rem;

    text-align: center;

    font-size: ${props => props.theme["font-size"].xsm};
    font-weight: ${props => props.theme["font-weight"].light};

    line-height: 150%;
    color: ${props => props.theme.colors["white-200"]}; 
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    
    > h2 {
      font-size: ${props => props.theme["font-size"].exg};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    
    > h2 {
      font-size: ${props => props.theme["font-size"].lg};
    }

    > p {
      font-size: ${props => props.theme["font-size"].xm};
    }
  }
`;


export const CardSkillsContainer = styled.div`
  width: max-content;
  max-width: 35rem;

  height: max-content;

  margin: 0 auto;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;

  justify-content: center;
  align-items: start;

  gap: 2rem 1.5rem;


  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    gap: 2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    max-width: 53.5rem;
    
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    max-width: 72rem;
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    max-width: 90rem;

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  
    gap: 1.8rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
  
    gap: 2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xlg}) {
    max-width: 109rem;
  
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

    gap: 2rem;
  }
`;