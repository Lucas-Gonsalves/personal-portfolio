import { AnchorHTMLAttributes } from "react";
import { ButtonNetWorkContainer, ButtonNetWorkHoverBackground } from "./styles";
import { IconType } from "react-icons";


interface ButtonNetWorkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconType;
  href?: string
}


export function ButtonNetWork({ icon: Icon, href="#", ...props}: ButtonNetWorkProps) {

  function clickButton(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.currentTarget.blur();
    return;
  };

  return(
    <ButtonNetWorkContainer
      href={href}
      onClick={clickButton}
      {...props}
    >

      <Icon/>
      <ButtonNetWorkHoverBackground/>

    </ButtonNetWorkContainer>
  );
};