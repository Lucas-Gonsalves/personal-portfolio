import styled from "styled-components";


export const LogoLayoutContainer = styled.div`

  width: 5.8rem;
  height: 5.8rem;

  position: relative;
  z-index: 0;

  display: flex;
  align-self: center;
  justify-content: center;

  img {
      
    width: 3.8rem;
    height: 3.8rem;

    position: absolute;

    bottom: 1rem;

    transform: rotate(45deg);

    transition: 1.2s ease;   
  }


  &:hover {

    #square-purple-and-white {
      transition: 1.2s ease;   

      filter: opacity(0);
      transform: rotate(225deg) scale(.8);
    }

    #square-white {
      transition: 1.2s ease;   

      filter: opacity(1);
      transform: rotate(225deg) scale(.8);
      box-shadow: 0px 0px 16px ${props => props.theme.colors["white-100"]};
    }

    #square-purple {
      transition: 1.2s ease;   

      filter: opacity(0);
      transform: rotate(225deg) scale(.8);
    }
  }

  &:active {
    img {
      transition: 2s ease;   
    }

    #square-purple-and-white {
      transition: transform 3s ease, filter 1.2s ease; 

      filter: opacity(0);
      transform: rotate(585deg);
    }

    #square-white {
      transition: transform 3s ease, filter 1.2s ease; 

      filter: opacity(0);
      transform: rotate(585deg);
    }

    #square-purple {
      transition: transform 3s ease, filter 1.2s ease, box-shadow 1.2s ease;      


      filter: opacity(1);
      transform: rotate(585deg);

      box-shadow: 0px 0px 16px ${props => props.theme.colors["purple-100"]};
    }

  }
`;

export const  SquarePurpleAndWhite = styled.img`

`;

export const  SquareWhite = styled.img`
  filter: opacity(0);

  box-shadow: 0px 0px 16px transparent;
`;

export const  SquarePurple = styled.img`
  filter: opacity(0);

  box-shadow: 0px 0px 16px transparent;
`;