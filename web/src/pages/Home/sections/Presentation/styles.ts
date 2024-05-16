import styled, { keyframes } from "styled-components";


const animationScale = keyframes`

  0% {
    transform: translate(-50%, -50%) scale(.95);
  }

  25% {
    transform: translate(-50%, -50%) scale(1.05);
  }

  50% {
    transform: translate(-50%, -50%) scale(.95);
  }

  75% {
    transform: translate(-50%, -50%) scale(1.05);
  }

  100% {
    transform: translate(-50%, -50%) scale(.95);
  }
`;

export const animationArrow = keyframes`
  0%{
    transform: translateY(4px);
  }

  25%{
    transform: translateY(0px);

  }

  50%{
    transform: translateY(4px);

  }

  75%{
    transform: translateY(0px);

  }

  100%{
    transform: translateY(4px);
  }
`;


export const PresentationContainer = styled.section`
  min-width: 32rem;

  width: 100%;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors["black-300"]};

  position: relative;
  
  overflow-x: hidden;
  overflow-y: hidden;

  z-index: 0;

  > img {
    position: absolute;
    z-index: -2;

    top: 50%;
    left: 50%;
  
    transform: translate(-50%, -50%);
    animation: ${animationScale} 10s ease infinite;
  }

  
  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    min-height: 100vh;
    padding-bottom: 8rem;
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
  padding: 4rem 2rem;

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
    padding: 4rem 4rem;
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    padding: 4rem 4rem;

    display: flex;
    align-items: center;
  
    gap: 3.2rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    gap: 6.2rem;

    h2 {
      font-size: ${props => props.theme["font-size"].xxg};
    }

    h1 {
      font-size: ${props => props.theme["font-size"].lg};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xgg}) {
    padding: 4rem 10rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xxg}) {
    padding: 4rem 14rem;

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

    background: #0D121685;

    box-shadow: 0 0 12px rgba(135, 80, 247, 00);

    transition: 
      transform .3s ease, 
      box-shadow .6s ease, 
      border-color .3s ease
    ;
  }


  img:hover {
    border-color: ${props => props.theme.colors["purple-100"]};
    transform: rotate(-0deg);

    transition: 
      transform .3s ease, 
      box-shadow .6s ease, 
      border-color .3s ease
      ;
  }


  img:active {
    transition: 
      transform .3s ease, 
      box-shadow .6s ease, 
      border-color .3s ease
      ;
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

  img:active {
    box-shadow: 0 0 12px rgba(135, 80, 247);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    min-width: 32.5rem;
    max-width: 47.5rem;
  }
`

export const ButtonReceiveSet = styled.div`
  display: flex;
  flex-direction: column;

  align-items: start;
  gap: 2rem;

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    flex-direction: row;
    align-items: center;

    margin-top: 6rem;
  }
`;


export const ButtonNetworkSet = styled.div`
  width: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export const ArrowDownPresentation = styled.div`
  
  width: 6rem;
  height: 6rem;
  
  display: none;
  align-items: center;
  justify-content: center;
  
  border-radius: 50%;
  
  left: 50%;

  z-index: 0;
  transform: translate(-50%);
  position: absolute;

  bottom: 1rem;
  box-shadow: 0 0 12px rgba(135, 80, 247, 0.0);
  

  transition: box-shadow 2s ease, background 2s ease;

  img {
    width: 3.6rem;
    height: 3.6rem;


    animation: ${animationArrow} 3s ease-in-out infinite;
    color: ${props => props.theme.colors["purple-100"]};
  }

  &:hover {
    transition: box-shadow 2s ease, background 2s ease;

    background: rgba(135, 80, 247, 0.1);
    box-shadow: 0 0 24px rgba(135, 80, 247, 0.2);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    display: flex;
  }
`;
