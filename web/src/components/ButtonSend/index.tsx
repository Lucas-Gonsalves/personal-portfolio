import React, { AllHTMLAttributes, ButtonHTMLAttributes } from "react";
import { ButtonSendContainer } from "./styles";


interface ButtonSendProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
};


export function ButtonSend({
  
  disabled,
  title,
  onClick,
  ...props

}: ButtonSendProps) {


  function clickButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.currentTarget.blur()

    onClick && onClick();
    return;
  };


  return(
    <ButtonSendContainer
      disabled={disabled}
      onClick={clickButton}
      {...props}
    >

      {title}

    </ButtonSendContainer>
  );
};