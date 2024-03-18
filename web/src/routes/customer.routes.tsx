import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { DefaultLayout } from "../layout/default";


export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <DefaultLayout/> }>

        <Route path="/" element={ <Home/> }/>

      </Route>
    </Routes>
  );
};