import { HomeContainer } from "./styles";
import { Presentation } from "./sections/Presentation";
import { QualityServices } from "./sections/QualityServices";



export function Home() {


  return(
    <HomeContainer>

      <Presentation/>
      <QualityServices/>

    </HomeContainer>
  );
};