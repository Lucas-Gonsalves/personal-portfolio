import styled from "styled-components";


export const FooterContainer = styled.footer`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors["black-300"]};

  gap: 2.5rem;
  padding: 4rem 2rem 4rem;


  > img {
    width: 4rem;
    height: 4rem;

    transform: rotate(45deg);
  }

  > nav ul {
    justify-content: center;
  
    gap: .5rem 2rem;

    li button {
      font-size: ${props => props.theme["font-size"].xxs};
    }
  }


  p, p a {
    text-align: center;
    text-decoration: none;

    transition: .6s ease;

    color: ${props => props.theme.colors["purple-100"]};
    font-size: ${props => props.theme["font-size"].xxs};
    
    &:hover, &:focus {
      transition: .6s ease;
      color: ${props => props.theme.colors["purple-100"]};
    }
  }

  p {
    font-weight: ${props => props.theme["font-weight"].light};

    a {
      outline: none;
      font-weight: ${props => props.theme["font-weight"].bold};
    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 4rem 4rem; 

    > img {
      width: 5rem;
      height: 5rem;
    }


    > p, p a, nav ul li button {
      font-size: ${props => props.theme["font-size"].mxs};
    }

  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {

    > img {
      width: 6rem;
      height: 6rem;
    }

    > p, p a, nav ul li button {
      font-size: ${props => props.theme["font-size"].m};
    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xgg}) {
    padding: 4rem 12rem;
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xxg}) {
    padding: 4rem 18rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exg}) {
    padding: 4rem 24rem;
  }
`;