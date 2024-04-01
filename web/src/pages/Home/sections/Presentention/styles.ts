import styled from "styled-components";


export const PresentationContainer = styled.section`
  width: 100%;
  height: max-content;
  
  background: ${({ theme }) => theme.colors["black-300"]};

  position: relative;
  overflow-x: hidden;

  z-index: 0;

  >  img {
    position: absolute;
    z-index: -2;

    top: 50%;
    left: 50%;
  
    transform: translate(-50%, -50%);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    height: 90vh;
  }
`;


export const overlayStyled = styled.div`
  position: absolute;

  z-index: -3;
  
  ${({ theme }) => (
    `background: linear-gradient(260deg, ${theme.colors["purple-100"]} 0%, rgba(115, 67, 210, 0) 100%);`
  )}
  
  filter: blur(15rem);
`;


export const OverlayBackground = styled(overlayStyled)`
  width: 32.2rem;
  height: 30.08rem;

  top: 0;
  right: 0;

  margin-top: -25%;
  margin-right: -25%;

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    
    margin-top: -15%;
    margin-right: -15%;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    
    margin-top: -10%;
    margin-right: -10%;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {

    margin-top: -5%;
    margin-right: -5%;
  }
`;


export const OverlayImageBackground = styled(overlayStyled)`
  width: 22rem;
  height: 22rem;

  bottom: 0;
  left: 0;

  margin-bottom: -10%;
  margin-left: -10%;
`;


export const TitleContent = styled.div`
  width: 100%;
  padding: 4rem 2rem 0;


  h2 {
    margin-bottom: 1rem;

    font-size: ${props => props.theme["font-size"].exm};
    font-weight: ${props => props.theme["font-weight"].bold};
  }
  
  h1 {
    font-size: ${props => props.theme["font-size"].exg};
    font-weight: ${props => props.theme["font-weight"].bold};
    
    color: transparent;

    background: linear-gradient(to right, rgba(135, 80, 247, 1) 0%, rgba(254, 254, 254, 1) 100%);
    background-clip: text;
  }

  
  p {
    max-width: 70rem;

    margin-top: 3rem;
    margin-bottom: 2rem;

    text-align: start;

    font-size: ${props => props.theme["font-size"].xm};
    font-weight: ${props => props.theme["font-weight"].light};

    line-height: 150%;
    color: ${props => props.theme.colors["white-200"]}; 
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 4rem 4rem 0;
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    
    display: flex;
    align-items: center;
  
    gap: 3.2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    gap: 6.2rem;

    h2 {
      font-size: ${props => props.theme["font-size"].exg};

    }

    h1 {

      
      font-size: ${props => props.theme["font-size"].lxg};
    }

    p {
      font-size: ${props => props.theme["font-size"].xmd};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xxg}) {
    padding: 4rem 14rem;
  }
`;


const ImageProfileStyle = styled.div`
  min-width: 20.5rem;
  max-width: 28.5rem;

  position: relative;

  margin: 3rem auto;

  img {
    width: 100%;
    height: 100%;
    
    transform: rotate(-5deg);
    border-radius: 38px;
    
    border-color: ${props => props.theme.colors["purple-200"]};
    border-width: 2px;
    border-style: solid;

    background: linear-gradient(to top right, #1a0b35cc, #000000);

    transition: .3s;
  }


  img:hover {
    border-color: ${props => props.theme.colors["purple-100"]};
    transform: rotate(-0deg);

    transition: .3s;
  }


  img:active {
    transform: scale(1.01);
    transition: .3s;
  };
`;


export const ImageProfileContainerMobile = styled(ImageProfileStyle)`

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    min-width: 28.5rem;
    max-width: 30.5rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    display: none;
  }
`;

export const ImageProfileContainerDesktop = styled(ImageProfileStyle)`
  display: none;

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    min-width: 32.5rem;
    max-width: 47.5rem;
  }
`

export const ButtonNetworkSet = styled.div`
  width: min-content;

  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;