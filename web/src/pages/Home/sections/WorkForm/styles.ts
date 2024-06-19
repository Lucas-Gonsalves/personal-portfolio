import styled from "styled-components";


export const WorkFormContainer = styled.section`
  width: 100%;
  min-height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  margin: 0 auto;

  gap: 5rem;
  padding: 6rem 2rem 8rem;
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 8rem 4rem; 
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    height: max-content;
    min-height: calc(100vh - 9.5rem);
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 4rem;
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


export const FormContainer = styled.div`
  max-width: 57.1rem;
  height: max-content;

  padding: 2rem;
  margin: 0 auto;

  border-radius: 16px;
  background: ${props => props.theme.colors["black-400"]};

  transition: padding .6s ease;

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    padding: 2.5rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    padding: 3rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    padding: 3.5rem;
  }
  
  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {
    max-width: 63.1rem;
    
    padding: 4rem;
    margin: 0;
  }
`;


export const TitleContent = styled.div`
  max-width: max-content;
  margin: 0 auto;

  > h2 {
    text-align: start;

    font-size: ${props => props.theme["font-size"].exg};
    font-weight: ${props => props.theme["font-weight"].bold};
    
    color: transparent;

    background: linear-gradient(to right, rgba(135, 80, 247, 1) 0%, rgba(254, 254, 254, 1) 100%);
    background-clip: text;
  }

  
  > p {
    margin: 1.5rem 0 4rem;
    max-width: 70rem;

    text-align: start;

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


export const Form = styled.form`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  > span {
    max-width: max-content;
    min-height: 1.8rem;

    align-self: flex-end;
    text-align: end;

    color: ${props => props.theme.colors["red-100"]};

    font-size: ${props => props.theme["font-size"].xss};
  }

  > button {
    margin-top: 1.5rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {
    gap: 1.5rem;

    > span {
      font-size: ${props => props.theme["font-size"].xxs};
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    gap: 1.5rem;

    > span {
      font-size: ${props => props.theme["font-size"].mxs};
    }
  }


  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {
    gap: 2rem;

    > span {
      font-size: ${props => props.theme["font-size"].m};
    }
  }
`;


export const InputSet = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xsm}) {    
    gap: 1.5rem;

    div {
      flex-direction: row;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xm}) {

    &, div {
      gap: 1.5rem;
    }
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].xg}) {

    & {
      gap: 2rem;
    }
  }
`;


export const ContactInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: ${props => props.theme["device-breackpoints"].s}) {
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme["device-breackpoints"].exm}) {
    max-width: 32.6rem;
    flex-direction: column;
  }
`;