import { 
  
  QualityServicesContainer, 
  TitleContent,
  
} from "./styles";


import { ServiceSelector } from "@/components/ServiceSelector";


interface QualityServicesProps {
  id?: string;
}

const selectorTopics = [
  {
    title: "Criação de Site",
    description: "Criamos interfaces modernas e responsivas, utilizando React para um design intuitivo e alta performance.",
  },

  {
    title: "Manutenção",
    description: "Oferecemos suporte contínuo e atualizações para garantir o funcionamento sem problemas dos projetos.",
  },

  {
    title: "Integração de API",
    description: "Integramos seu site com APIs para proporcionar funcionalidades avançadas e comunicação eficiente com outros serviços.",
  },

  {
    title: "Design Responsivo",
    description: "Desenvolvemos websites adaptáveis para todos os dispositivos, assegurando acessibilidade e estética em todas as telas.",
  },
];

export function QualityServices({
  id = "",
}: QualityServicesProps ) {

  return(
    <QualityServicesContainer
      id={id}
    >

      <TitleContent>
        <h2>Serviços de Qualidade</h2>

        <p>
          Transformamos suas ideias em projetos web únicos que inspiram você 
          e seus clientes, oferecendo serviços de qualidade que elevam sua presença online.
        </p>
      </TitleContent>
      
      
      <ServiceSelector
        id="service-box"
        selectorTopics={selectorTopics}
      />

    </QualityServicesContainer>
  );
};