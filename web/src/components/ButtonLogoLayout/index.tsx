import { ButtonLogoLayoutContainer, SquarePurple, SquarePurpleAndWhite, SquareWhite } from "./styled";

import imageLogoSquarePurple from "@/assets/logos/square-purple.svg";
import imageLogoSquareWhite from "@/assets/logos/square-white.svg";
import imageLogoSquarePurpleAndWhite from "@/assets/logos/square-white-purple.svg";

export function ButtonLogoLayout() {

  return(
    <ButtonLogoLayoutContainer>

      <SquarePurpleAndWhite 
        id="square-purple-and-white"
        src={imageLogoSquarePurpleAndWhite} 
      />

      <SquareWhite 
        id="square-white"
        src={imageLogoSquareWhite} 
      />

      <SquarePurple 
        id="square-purple"
        src={imageLogoSquarePurple} 
      />

    </ButtonLogoLayoutContainer>
  );
};