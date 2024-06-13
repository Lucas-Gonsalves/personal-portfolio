import { CardSkillContainer, CardSkillImageContent } from "./styles";

interface CardSkillProps {
  skillImage: string;
  skillImageAlt?: string;
  skillTitle?: string;
}


export function CardSkill({

  skillImage,
  skillImageAlt = "",
  skillTitle,

}: CardSkillProps) {

  return (
    <CardSkillContainer>

      <CardSkillImageContent>
        <img 
          src={skillImage} 
          alt={skillImageAlt}
        />
      </CardSkillImageContent>

        { skillTitle && (
            <span>
              { skillTitle }
            </span>
          )
        }
    </CardSkillContainer>
  );
};