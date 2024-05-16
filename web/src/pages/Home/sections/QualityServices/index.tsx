import { 
  
  QualityServicesContainer, 
  TitleContent,
  
} from "./styles";


import { ServiceBox } from "@/components/ServiceBox";


export function QualityServices() {

  return(
    <QualityServicesContainer>

      <TitleContent>
        <h2>Meus serviços de qualidade</h2>

        <p>
          Colocamos suas ideias e, portanto, seus desejos na 
          forma de um projeto web único que inspira você e seus clientes.
        </p>
      </TitleContent>
      
      
      <ServiceBox
        id="service-box"
      />

    </QualityServicesContainer>
  );
};