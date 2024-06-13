import styled from "styled-components";


export const QualityServicesContainer = styled.section`
  width: 100%;

  height: max-content;

  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;

  padding: 6rem 2rem 8rem;

  > #service-box {
    margin: auto 0;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 8rem 4rem; 
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    height: max-content;
    min-height: calc(100vh - 9.5rem);
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

    font-size: ${props => props.theme["font-size"].exg};
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

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    > h2 {
      font-size: ${props => props.theme["font-size"].lg};
    }
  
    > p {
      font-size: ${props => props.theme["font-size"].xm};
    }
  }

`;