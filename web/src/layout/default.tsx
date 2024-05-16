import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer } from "./styles";
import { ScrollProgress } from "@/components/ScrollProgress";


export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Outlet/>

      <ScrollProgress
        id="scroll-circle-progress"
      />
    </DefaultLayoutContainer>
  );
};