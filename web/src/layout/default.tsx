import { 
  DefaultLayoutContainer, 
} from "./styles";

import { Outlet } from "react-router-dom";


export function DefaultLayout() {

  return (
    <DefaultLayoutContainer>
      <Outlet/>
    </DefaultLayoutContainer>
  );
};