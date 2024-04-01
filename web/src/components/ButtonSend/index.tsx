import { AllHTMLAttributes } from "react";
import { ButtonSendContainer } from "./styles";


interface ButtonSendProps extends AllHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
};


export function ButtonSend({
  
  disabled,
  title,
  onClick,

}: ButtonSendProps) {


  function handleOnClick() {
    onClick && onClick();
    return;
  };


  return(
    <ButtonSendContainer
      disabled={disabled}
      onClick={() => handleOnClick()}
    >

      {title}

    </ButtonSendContainer>
  );
};