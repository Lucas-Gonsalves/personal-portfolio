import styled from "styled-components";


export const NavigationBarContainer = styled.nav`
  display: none;
  
  ul {
    display: flex;
    gap: 2rem;

    padding-top: 2px;

    li {
      list-style: none;
      cursor: pointer;
      

      button {
        font-size: ${props => props.theme["font-size"].xs};
        font-weight: ${props => props.theme["font-weight"].medium};

        display: flex;
        flex-direction: column-reverse;

        border: none;
        background: none;
        cursor: pointer;
        
        gap: .2rem;
        color: ${props => props.theme.colors["white-200"]};

        position: relative;

        &::before {
          content: "";

          width: 100%;
          height: 2px;

          border-radius: 4px;
          background: linear-gradient(260deg, rgba(42, 20, 84, 1) 0%, rgba(135, 80, 247, 1) 100%);

          transform-origin: right;
          transform: scaleX(0);
          
          transition: transform 0.3s ease-in-out;
        }

        &:hover {
          transition: transform 0.3s ease-in-out;
          color: ${props => props.theme.colors["white-100"]};
        }

        &:hover::before {
          transform-origin: left;
          transform: scaleX(1);
        }
      }
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {
    display: block;
  }
`;