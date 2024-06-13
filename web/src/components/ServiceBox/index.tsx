import { HTMLAttributes, useState } from "react";
import { 
  
  ServiceBoxContainer, 
  ServiceTopicContent, 
  ServiceTopic,
  ServiceTopicTitle,
  ServiceTopicTitleContent,
  Selector,

} from "./styles";

import { PiArrowDownRightLight } from "react-icons/pi";


interface ServiceBoxProps extends HTMLAttributes<HTMLUListElement> {}


export function ServiceBox({...rest}: ServiceBoxProps) {
  const [ baseHeightPosition, setBaseHeightPosition ] = useState<string>("0%");
  const [ currentheightPosition, setCurrentHeightPosition ] = useState<string>(baseHeightPosition);


  function handleHeightPosition(position: string) {

    return {
      onClick: () => setBaseHeightPosition(position),
      onMouseEnter: () => setCurrentHeightPosition(position),
      onMouseLeave: () => setCurrentHeightPosition(baseHeightPosition),
    };
  };

  const isCurrentZero = currentheightPosition === "0%";
  const isCurrentHundred = currentheightPosition === "100%";
  const isCurrentTwoHundred = currentheightPosition === "200%";
  const isCurrentThreeHundred = currentheightPosition === "300%";

  return (
    <ServiceBoxContainer
    {...rest}
    >


      <ServiceTopic
        data-current-focus={isCurrentZero}
        {...handleHeightPosition("0%")}
      >

        <Selector 
          data-height-position={currentheightPosition}
        />
        

        <ServiceTopicContent>
          <ServiceTopicTitle>

            <ServiceTopicTitleContent>
              <span>01</span>
              <h3>Branding Design</h3>
            </ServiceTopicTitleContent>

            <PiArrowDownRightLight/>
          </ServiceTopicTitle>

          <p>
            Eu destrincho problemas complexos de experiência do usuário para criar soluções que conectam bilhões de pessoas
          </p>

          <PiArrowDownRightLight/>
        </ServiceTopicContent>

      </ServiceTopic>

      <ServiceTopic
        data-current-focus={isCurrentHundred}
        { ...handleHeightPosition("100%")}
      >

        <ServiceTopicContent>
          <ServiceTopicTitle>

            <ServiceTopicTitleContent>
              <span>02</span>
              <h3>Web Design</h3>
            </ServiceTopicTitleContent>

            <PiArrowDownRightLight/>
          </ServiceTopicTitle>

          <p>
            Eu destrincho problemas complexos de experiência do usuário para criar soluções que conectam bilhões de pessoas
          </p>
          
          <PiArrowDownRightLight/>
        </ServiceTopicContent>

      </ServiceTopic>

      <ServiceTopic
        data-current-focus={isCurrentTwoHundred}  
        { ...handleHeightPosition("200%")}
      >

        <ServiceTopicContent>
          <ServiceTopicTitle>

            <ServiceTopicTitleContent>
              <span>03</span>
              <h3>Designer UI/UX</h3>
            </ServiceTopicTitleContent>

            <PiArrowDownRightLight/>
          </ServiceTopicTitle>

          <p>
            Eu destrincho problemas complexos de experiência do usuário para criar soluções que conectam bilhões de pessoas
          </p>

          <PiArrowDownRightLight/>
        </ServiceTopicContent>

      </ServiceTopic>

      <ServiceTopic
        data-current-focus={isCurrentThreeHundred}
        { ...handleHeightPosition("300%")}
      >

        <ServiceTopicContent>
          <ServiceTopicTitle>

            <ServiceTopicTitleContent>
              <span>04</span>
              <h3>Graphics Design</h3>
            </ServiceTopicTitleContent>

            <PiArrowDownRightLight/>
          </ServiceTopicTitle>

          <p>
            Eu destrincho problemas complexos de experiência do usuário para criar soluções que conectam bilhões de pessoas
          </p>

          <PiArrowDownRightLight/>
        </ServiceTopicContent>

      </ServiceTopic>


    </ServiceBoxContainer>
  );
};