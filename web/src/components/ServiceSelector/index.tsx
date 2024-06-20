import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { 
  
  ServiceSelectorContainer, 
  ServiceTopic,
  TopicTitle,
  HoverBackground,

} from "./styles";

import { PiArrowDownRightLight } from "react-icons/pi";


export type SelectorTopics = {
  title: string;
  description: string;
}[];

export interface CalculateHeightAndPositionOfHoverBackgroundProps {
  event?:  React.MouseEvent<HTMLLIElement>,
  isInitial?: boolean,

}

interface ServiceSelectorProps extends HTMLAttributes<HTMLUListElement> {
  selectorTopics: SelectorTopics;
};


export function ServiceSelector({
  
  selectorTopics = [],
  ...rest

}: ServiceSelectorProps) {

  const [ hoverHeight, setHoverHeight ] = useState<number>();
  const [ hoverY, setHoverY ] = useState<number>();

  const [ lifocus, setLiFocus ] = useState<string>(selectorTopics[0].title);
  const [ liElementsYPositions, setLiElementsYPositions ] = useState<Record<string, number>>({});

  const focusLiRef = useRef<HTMLLIElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);


  function calculateHeightAndPositionOfHoverBackground({
    
    event,
    isInitial = false,

  }: CalculateHeightAndPositionOfHoverBackgroundProps) {

    const liElement = isInitial ? focusLiRef.current : event?.currentTarget;

    if(!liElement) return;

    const {

      top: liTop,
      height: liheight,

    } = liElement.getBoundingClientRect();

    const containerRefTopPosition = containerRef.current!.getBoundingClientRect().top;

    const liYPosition = liTop - (containerRefTopPosition);

    setHoverHeight(liheight);
    setHoverY(liYPosition);

    return;
  };


  function onMouseLeaveLiElement(){

    if (!focusLiRef.current) return;

    const event = {
      currentTarget: focusLiRef.current,
    } as React.MouseEvent<HTMLLIElement>;
    

    calculateHeightAndPositionOfHoverBackground({ event });
    return;
  };


  function onMouseEnterLiElement(event: React.MouseEvent<HTMLLIElement>) {
    calculateHeightAndPositionOfHoverBackground({event});
    return;
  };

  
  function changeLiFocus(liTopicTitle: string, ) {
    setLiFocus(liTopicTitle);
    return;
  };


  function onClickLiElement(liTopicTitle: string) {
    changeLiFocus(liTopicTitle);
    return;
  };
  

  function formatTopicIndex(topicIndex: number) {
    const topicIncremented =  topicIndex + 1;

    return topicIncremented.toString().padStart(2, "0");
  };


  function isLiElementFocus(lifocus: string, liTopicTitle: string) {
    return lifocus === liTopicTitle ? {ref: focusLiRef} : {};
  };


  function compareLiPositionWithHover(liId: string, HoverY: number | undefined) {

    if (liElementsYPositions[liId] === undefined || HoverY === undefined) return false;

    return liElementsYPositions[liId] === HoverY;
  };

  
  useEffect(() => {
    calculateHeightAndPositionOfHoverBackground({isInitial: true})

    if (!containerRef.current) return;

    const containerRefTopPosition = containerRef.current!.getBoundingClientRect().top;
    const liElements = containerRef.current.querySelectorAll('li');

    const newLiPositions: Record<string, number> = {};
    
    liElements.forEach(li => {

      const liTopPosition = li.getBoundingClientRect().top;
      const liYPosition = liTopPosition - containerRefTopPosition;

      const liId = li.getAttribute('data-li-position')!;

      newLiPositions[liId] = liYPosition;
    });

    
    setLiElementsYPositions(newLiPositions);
  }, []);

  
  return (
    <ServiceSelectorContainer
    {...rest}
    ref={containerRef}
    >

      <HoverBackground
        data-hover-height={hoverHeight}
        data-hover-y-position={hoverY}
      />

      { selectorTopics &&
          selectorTopics.map((topic, index) => (

            <li 
              key={`service_topic_key_${topic.title}`}
              data-li-position={topic.title}
              onMouseEnter={onMouseEnterLiElement}
              onMouseLeave={onMouseLeaveLiElement}
              onClick={() => onClickLiElement(topic.title)}

              {...isLiElementFocus(lifocus, topic.title)}
            >
              <ServiceTopic
                data-topic-is-focus={compareLiPositionWithHover(topic.title, hoverY)}
              >

                <div>
                  <TopicTitle>
                    <span>{formatTopicIndex(index)}</span>
                    <h3>{topic.title}</h3>
                  </TopicTitle>

                  <PiArrowDownRightLight/>
                </div>

                <p>{ topic.description }</p>
                <PiArrowDownRightLight/>

              </ServiceTopic>
            </li>
          ))
      }

    </ServiceSelectorContainer>
  );
};