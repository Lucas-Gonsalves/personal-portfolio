import {

  TextareaContainer

} from "./styles";


import { 

  forwardRef, 
  TextareaHTMLAttributes 

} from "react";


interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((

  {
    ...rest
  },

  ref 

) => {

  return (

    <TextareaContainer
      { ...rest }
      ref={ ref }
    />

  );
});