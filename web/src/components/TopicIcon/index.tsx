import { IconContainer, TopicIconContainer } from "./styled";
import { IconType } from "react-icons";


interface TopicIconProps {
  icon: IconType;
  href?: string;
  title?: string;
  description?: string;
  targetBlank?: boolean;
  tabIndexHidden?: boolean;
};



export function TopicIcon({

  icon: Icon,
  href,
  title,
  description,
  targetBlank,
  tabIndexHidden,


  }: TopicIconProps) {

  return (
    <TopicIconContainer>
      
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
    
    </TopicIconContainer>
    );
};