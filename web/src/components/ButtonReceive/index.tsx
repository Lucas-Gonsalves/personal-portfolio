import { ButtonHTMLAttributes } from "react";
import { ButtonReceiveContainer } from "./styles";
import { IconType } from "react-icons";


interface ButtonReceiveProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  icon?: IconType;
};


export function ButtonReceive({
  
  icon: Icon,
  title,
  onClick,
  ...props

}: ButtonReceiveProps) {


  function clickButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.currentTarget.blur()

    onClick && onClick();
    return;
  };


  return(
    <ButtonReceiveContainer
      onClick={clickButton}
      {...props}
    >


      {title} 

      { Icon && <Icon/> }
    </ButtonReceiveContainer>
  );
};