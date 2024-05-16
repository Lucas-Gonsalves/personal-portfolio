import styled from "styled-components";


export const QualityServicesContainer = styled.section`
  min-width: 32rem;
  width: 100%;

  height: max-content;
  min-height: max-content;

  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;

  > #service-box {
    padding: 4rem 2rem;
    margin: auto;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    > #service-box {
      padding: 4rem 4rem;
    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    height: 100vh;
    min-height: 100vh;

    > #service-box {
      padding: 4rem 4rem;
    }
  }
`;


export const TitleContent = styled.div`
  max-width: max-content;
  margin: 0 auto;

  padding: 5rem 2rem 0;

  > h2 {
    text-align: center;

    font-size: ${props => props.theme["font-size"].exg};
    font-weight: ${props => props.theme["font-weight"].bold};
    
    color: transparent;

    background: linear-gradient(to right, rgba(135, 80, 247, 1) 0%, rgba(254, 254, 254, 1) 100%);
    background-clip: text;
  }

  
  > p {
    margin-top: 1.5rem;
    max-width: 70rem;

    text-align: center;

    font-size: ${props => props.theme["font-size"].xm};
    font-weight: ${props => props.theme["font-weight"].light};

    line-height: 150%;
    color: ${props => props.theme.colors["white-200"]}; 
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 4rem 4rem 0;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    
    > h2 {
      font-size: ${props => props.theme["font-size"].lg};
    }
  }
`;