import { ButtonNetWorkContainer, ButtonNetWorkHoverBackground } from "./styles";
import { IconType } from "react-icons";


interface ButtonNetWorkProps {
  icon: IconType;
}


export function ButtonNetWork({ icon: Icon }: ButtonNetWorkProps) {



  return(
    <ButtonNetWorkContainer>

      <Icon/>
      <ButtonNetWorkHoverBackground/>

    </ButtonNetWorkContainer>
  );
};