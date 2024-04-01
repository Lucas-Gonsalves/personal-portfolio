import { HTMLAttributes, HtmlHTMLAttributes } from "react";
import { ButtonReceiveContainer } from "./styles";
import { IconType } from "react-icons";


interface ButtonReceiveProps extends HTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  icon?: IconType;
};


export function ButtonReceive({
  
  icon: Icon,
  title,
  onClick,

}: ButtonReceiveProps) {


  function handleOnClick() {
    onClick && onClick();

    return;
  };

  return(
    <ButtonReceiveContainer
      onClick={() => handleOnClick()}
    >


      {title} 

      { Icon && <Icon/> }
    </ButtonReceiveContainer>
  );
};