import { PiArrowUpLeftLight  } from "react-icons/pi";
import { CardWorkContainer, DescriptionHoverContainer, DescriptionHoverContent } from "./styles";


export interface CardWorkProps {
  tags: string[];
  imgWork: string;
  imgAlt?: string;
  title: string;
  description?: string;
  link?: string;
  preview?: boolean;
  conjuntAnimation?: boolean;
};


export function CardWork({

  imgWork,
  imgAlt = "",
  title = "",
  description = "",
  preview = false,
  conjuntAnimation = false,
  link = "#",

}: CardWorkProps) {

  return (

    <CardWorkContainer
      data-hover-title={title}
      data-hover-description={description}
      data-is-card-preview={preview}
      data-is-conjunt-animation={conjuntAnimation}
    >

      <DescriptionHoverContainer
        href={link} 
        target="_blank"
        {...(conjuntAnimation ? {} : {tabIndex: -1})}
      >

        <DescriptionHoverContent>
          <div>
            <h3>{title}</h3>
            {description && (<p>{description}</p>)}
          </div>
            
          <PiArrowUpLeftLight />
        </DescriptionHoverContent>

      </DescriptionHoverContainer>

      <img 
        src={imgWork} 
        alt={imgAlt} 
      />

    </CardWorkContainer>

  );
};