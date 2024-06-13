import {

  InputContainer

} from "./styles";


import { 

  forwardRef, 
  InputHTMLAttributes 

} from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const Input = forwardRef<HTMLInputElement, InputProps>((

  {
    ...rest
  },

  ref 

) => {

  return (

    <InputContainer
      { ...rest }
      ref={ ref }
    />

  );
});