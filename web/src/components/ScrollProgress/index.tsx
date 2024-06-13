import { HTMLAttributes, useEffect, useState } from "react";
import { ScrollProgressContainer, ScrollProgressStateSVG } from "./styles";
import iconArrowUp from "@/assets/icons/arrow-up.svg";


interface ScrollProgressProps extends HTMLAttributes<HTMLDivElement> {}


export function ScrollProgress({

  ...rest

}: ScrollProgressProps) {

  
  const [ scrollProgress, setScrollProgress ] = useState(0);

  function handleScroll() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100: 0;
    
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  function goToTopScroll(): void {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    return;
  };


  const scrollProgressFormated = scrollProgress > 0;
  const svgStrokeDashoffset = (100 - scrollProgress) * 3.08;
  

  return (

    <ScrollProgressContainer
      data-scroll-progress={scrollProgressFormated}
      onClick={() => goToTopScroll()}
      {...rest}
    >

      <ScrollProgressStateSVG data-progress={scrollProgress} viewBox="-1 -1 102 102">
        <circle
            cx="50"
            cy="50"
            r="49"
            fill="none"
            stroke="#8750f7"
            strokeWidth="3"
            strokeDasharray="307.919"
            strokeDashoffset={svgStrokeDashoffset}
        />
      </ScrollProgressStateSVG>

      <img src={iconArrowUp} />

    </ScrollProgressContainer>
  );
};