import { 
  
  QualityServicesContainer, 
  TitleContent,
  
} from "./styles";


import { ServiceBox } from "@/components/ServiceBox";


interface QualityServicesProps {
  id?: string;
}

export function QualityServices({
  id = "",
}: QualityServicesProps ) {

  return(
    <QualityServicesContainer
      id={id}
    >

      <TitleContent>
        <h2>Serviços de qualidade</h2>

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