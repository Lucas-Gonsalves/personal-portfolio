import { IconContainer, AnchorTopicContainer } from "./styled";
import { IconType } from "react-icons";


interface AnchorTopicProps {
  icon: IconType;
  href?: string;
  title?: string;
  description?: string;
  targetBlank?: boolean;
  tabIndexHidden?: boolean;
};



export function AnchorTopic({

  icon: Icon,
  href,
  title,
  description,
  targetBlank,
  tabIndexHidden,


  }: AnchorTopicProps) {

  return (
    <AnchorTopicContainer>
      
      <IconContainer
        {...(
          tabIndexHidden ? { tabIndex: -1 } : {}
        )}
      >
        <Icon/>
      </IconContainer>

      {
        title && (
          <div>
            <strong>{ title }</strong>
            <a 
              href={href}
              {...(
                targetBlank ? { target: "_blank" } : {}
              )}
            >
              { description }
            </a>
          </div>
        )
      }
    
    </AnchorTopicContainer>
    );
};