import styled from "styled-components";


export const CardSkillContainer = styled.div`
  max-width: max-content;
  max-height: max-content;



  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;

  transition: .6s ease;

  > span {
    max-width: 12rem;
    text-align: center;

    font-size: ${props => props.theme["font-size"].m};
    font-weight: ${props => props.theme["font-weight"]["semi-bold"]};
    color: ${props => props.theme.colors["purple-100"]};
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
  
    span {
      font-size: ${props => props.theme["font-size"].m};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {

    span {
      font-size: ${props => props.theme["font-size"].xm};
    }
  }
`;


export const CardSkillImageContent = styled.div`
  max-width: 12rem;
  min-width: 12rem;

  min-height: 12rem;
  max-height: 16.5rem;


  background: ${props => props.theme.colors["black-300"]};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  border-style: solid;
  border-width: 1px;
  border-color: transparent;

  border-radius: 2.5rem;

  transition: .6s ease;

  > img {
    width: 100%;
    height: 100%;
    
    transition: .3s ease;
    
    filter: grayscale(95%);
    transform: scale(.95);
  }


  &:hover {
    transition: .6s ease;

    background: ${props => props.theme.colors["purple-200"]};
    border-color: ${props => props.theme.colors["purple-100"]};

    img {
      transition: .3s ease;

      filter: grayscale(0%);
      transform: scale(1);
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xs}) {
    max-width: 15.7rem;
    min-width: 15.7rem;

    min-height: 15.7rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {
    max-width: 16.5rem;
    min-width: 16.5rem;

    min-height: 16.5rem;
  }
`;