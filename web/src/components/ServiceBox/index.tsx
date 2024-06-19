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
              <h3>Front-End</h3>
            </ServiceTopicTitleContent>

            <PiArrowDownRightLight/>
          </ServiceTopicTitle>

          <p>
            Criamos interfaces modernas e responsivas, focando em um design intuitivo e alta performance com React.
          </p>

          <PiArrowDownRightLight/>
        </ServiceTopicContent>

      </ServiceTopic>

      <ServiceTopic
        data-current-focus={isCurrentTwoHundred}  
        { ...handleHeightPosition("100%")}
      >

        <ServiceTopicContent>
          <ServiceTopicTitle>

            <ServiceTopicTitleContent>
              <span>02</span>
              <h3>Optimization</h3>
            </ServiceTopicTitleContent>

            <PiArrowDownRightLight/>
          </ServiceTopicTitle>

          <p>
            Otimizamos seu site para carregamento rápido e navegação eficiente, usando minificação de código e caching.
          </p>

          <PiArrowDownRightLight/>
        </ServiceTopicContent>

      </ServiceTopic>

      <ServiceTopic
        data-current-focus={isCurrentThreeHundred}
        { ...handleHeightPosition("200%")}
      >

        <ServiceTopicContent>
          <ServiceTopicTitle>

            <ServiceTopicTitleContent>
              <span>03</span>
              <h3>API Integration</h3>
            </ServiceTopicTitleContent>

            <PiArrowDownRightLight/>
          </ServiceTopicTitle>

          <p>
            Integramos seu site com APIs para funcionalidades avançadas e comunicação eficiente com outros serviços.
          </p>

          <PiArrowDownRightLight/>
        </ServiceTopicContent>

      </ServiceTopic>

      <ServiceTopic
        data-current-focus={isCurrentHundred}
        { ...handleHeightPosition("300%")}
      >

        <ServiceTopicContent>
          <ServiceTopicTitle>

            <ServiceTopicTitleContent>
              <span>04</span>
              <h3>Responsive Design</h3>
            </ServiceTopicTitleContent>

            <PiArrowDownRightLight/>
          </ServiceTopicTitle>

          <p>
            Desenvolvemos websites adaptáveis para todos os dispositivos, garantindo acessibilidade e estética nas telas.
          </p>
          
          <PiArrowDownRightLight/>
        </ServiceTopicContent>

      </ServiceTopic>


    </ServiceBoxContainer>
  );
};