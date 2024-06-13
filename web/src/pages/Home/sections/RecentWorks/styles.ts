import styled from "styled-components";


export const RecentWorksContainer = styled.section`
  width: 100%;
  height: max-content;

  background: ${({ theme }) => theme.colors["black-300"]};

  position: relative;
  z-index: 0;

  padding: 6rem 2rem;
  transition: all .6s ease;

  display: flex;
  flex-direction: column;

  align-items: center;
  
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


export const OverlayBackground = styled.div`
  width: 32.2rem;
  height: 30.08rem;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  transition: all .6s ease;


  position: absolute;
  z-index: -1;
  
  ${({ theme }) => (
    `background: linear-gradient(0deg, ${theme.colors["purple-100"]} 0%, rgba(115, 67, 210, 0) 100%);`
  )}
  
  filter: blur(15rem);
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
