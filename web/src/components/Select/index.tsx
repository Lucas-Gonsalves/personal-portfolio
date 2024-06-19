import {

  SelectContainer,
  Selected,
  Options,

} from "./styles";

import { SlArrowDown } from "react-icons/sl";


import { forwardRef, SelectHTMLAttributes, useLayoutEffect, useRef, useState } from "react";


interface SelectProps extends SelectHTMLAttributes<HTMLInputElement> {
  options?: string[];
  optionsGroup?: string;
  categoryName?: string;
  ariaInvalid?: boolean;
};


export const Select = forwardRef<HTMLInputElement, SelectProps>((

  { 
    options = [ ],
    optionsGroup = "uninformed",
    categoryName = "uninformed",
    ariaInvalid = false,
    ...props
  },

  ref,

) => {
  const [ currentOption, setCurrentOption ] = useState<string>(categoryName);

  const [ isOptionsOpen, setIsOptionsOpen ] = useState<boolean>(false);

  const optionsRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);


  function clickSelected(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!isOptionsOpen && optionsRef.current) {

      const tabEvent = new KeyboardEvent('keydown', {
        key: 'Tab',
        keyCode: 9,
        code: 'Tab',
        bubbles: true,
        cancelable: true,
      });

      if(currentOption === categoryName) {
        
        const categoryNameInput = optionsRef
          .current
          .querySelector('input[type="radio"]') as HTMLInputElement | null
        ;

        categoryNameInput?.focus();
        optionsRef.current.dispatchEvent(tabEvent);

      } else {
  
        const checkedOptionInput = optionsRef
          .current
          .querySelector('input[type="radio"]:checked') as HTMLInputElement | null
        ;

        checkedOptionInput?.focus();
        optionsRef.current.dispatchEvent(tabEvent);
      };
    };  

    setIsOptionsOpen(!isOptionsOpen);
    return;
  };


  function changeOptionByMouse(event: React.MouseEvent<HTMLInputElement>, option: string) {
    
    if (event.detail < 1) return;

    if (optionsRef.current) {
      
      const checkedInput = optionsRef
        .current
        .querySelector('input[type="radio"]:checked') as HTMLInputElement | null
      ;
      
      checkedInput?.focus();
    };
      
    if (isOptionsOpen && selectedRef.current) {
      selectedRef.current.focus();
    };
        
    setCurrentOption(option);
    setIsOptionsOpen(false);

    return;
  };


  function ChangeOptionByKeyboard(event: React.KeyboardEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) {

    if (event.detail > 0) return;

    if (event.key === "Escape") {
      setIsOptionsOpen(false);
    };

    if (selectedRef.current) selectedRef.current.focus();

    if (event.target instanceof HTMLButtonElement) return;


    switch(event.key) {
  
      case " ": {
        setIsOptionsOpen(!isOptionsOpen);

        break;
      };

      case "Tab": {
        event.preventDefault();

        return;
      };

      case "Enter" : {
        event.preventDefault();

        const option = event.currentTarget.value;

        setCurrentOption(option);
        setIsOptionsOpen(false);

        break;
      };
    };

    return;
  };


  useLayoutEffect(() => {

    function clickOutsite(event: MouseEvent) {

      if(isOptionsOpen && selectedRef.current && optionsRef.current) {

        if(selectedRef.current.contains(event.target as Node)) {
          return;
        }

        if(!optionsRef.current.contains(event.target as Node)) {
          setIsOptionsOpen(false);
        }

        return;
      };
    };
  
    document.addEventListener("mousedown", clickOutsite);

    return () => {
      document.removeEventListener("mousedown", clickOutsite);
    };

  }, [isOptionsOpen]);



  const inputValueTest = currentOption === categoryName ? "Outros" : currentOption;

  return (
    <SelectContainer>

    <Selected
      type="button"
      onClick={clickSelected}
      data-is-select-open={isOptionsOpen}
      onKeyDown={ChangeOptionByKeyboard}
      aria-invalid={ariaInvalid}
      ref={selectedRef}
    >
      <span>{ currentOption }</span>
      <input
        value={inputValueTest}
        tabIndex={-1}
        readOnly
        ref={ref}
        {...props}
      />

      <SlArrowDown/>
    </Selected>

    <Options
      data-is-select-open={isOptionsOpen}
      ref={ optionsRef }
    >
      {
        options && options.map(option => { 

          return ( 
            <label
              htmlFor="input-radio-layout"
              key={`select_${optionsGroup}_option_${option}`}
            >

                <input
                  type="radio"
                  value={option}
                  checked={option === currentOption}
                  onChange={() => {}}
                  onClick={(event) => changeOptionByMouse(event, option)}
                  onKeyDown={ChangeOptionByKeyboard}
                  name={optionsGroup}
                  
                  {...(isOptionsOpen ? {} : {tabIndex: -1})}
                />

              <span>{ option }</span>
            
            </label>
          )}
        )
      }
    </Options>

    </SelectContainer>
  );
});