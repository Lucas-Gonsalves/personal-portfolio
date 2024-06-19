import { CardSkill } from "@/components/CardSkill";
import { CardSkillsContainer, SkillsBackground, TitleContent } from "./styles";


import tsCardImage from "@/assets/skills/ts-card-image.svg";
import jsCardImage from "@/assets/skills/js-card-image.svg";
import githubCardImage from "@/assets/skills/github-card-image.svg";
import reactCardImage from "@/assets/skills/react-card-image.svg";
import htmlCardImage from "@/assets/skills/html-card-image.svg";
import cssCardImage from "@/assets/skills/css-card-image.svg";
import styledComponentsCardImage from "@/assets/skills/styledComponents-card-image.svg";
import nodeJSCardImage from "@/assets/skills/nodeJS-card-image.svg";
import gitCardImage from "@/assets/skills/git-card-image.svg";
import figmaCardImage from "@/assets/skills/figma-card-image.svg";
import restFullCardImage from "@/assets/skills/restFull-card-image.svg"; 
import sqlCardImage from "@/assets/skills/sql-card-image.svg"; 

interface SkillsProps {
  id?: string;
}

export function Skills({
  id = "",
}: SkillsProps) {
  return(
    <SkillsBackground
      id={id}
    >


      <TitleContent>
        <h2>Minhas habilidades</h2>

        <p>
          Colocamos suas ideias e, portanto, seus desejos na 
          forma de um projeto web único que inspira você e seus clientes.
        </p>
      </TitleContent>

      <CardSkillsContainer>

        <CardSkill
          skillImage={reactCardImage}
          skillTitle="React"
        />

        <CardSkill
          skillImage={tsCardImage}
          skillTitle="TypeScript"
        />

        <CardSkill
          skillImage={githubCardImage}
          skillTitle="Github"
        />
 
        <CardSkill
          skillImage={jsCardImage}
          skillTitle="JavaScript"
        />

        <CardSkill
          skillImage={htmlCardImage}
          skillTitle="HTML 5"
        />

        <CardSkill
          skillImage={cssCardImage}
          skillTitle="CSS 3"
        />

        <CardSkill
          skillImage={styledComponentsCardImage}
          skillTitle="Styled Components"
        />

        <CardSkill
          skillImage={nodeJSCardImage}
          skillTitle="Node JS"
        />

        <CardSkill
          skillImage={gitCardImage}
          skillTitle="GIT"
        />

        <CardSkill
          skillImage={figmaCardImage}
          skillTitle="Figma"
        />

        <CardSkill
          skillImage={restFullCardImage}
          skillTitle="API RestFull"
        />

        <CardSkill
          skillImage={sqlCardImage}
          skillTitle="Database & ORM"
        />

      </CardSkillsContainer>


    </SkillsBackground>
  );
};