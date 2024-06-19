import { 
  
  RecentWorksContainer, 
  OverlayBackground,
  TitleContent,


 } from "./styles";

 import coffeeDeliveryCardImage from "@/assets/work/coffee-delivery-card-image.png";
 import moviesNotesCardImage from "@/assets/work/movies-notes-card-image.png";
 import stopwatchTimerCardImage from "@/assets/work/stopwatch-timer-card-image.png";
 import todoListCardImage from "@/assets/work/todo-list-card-image.png";
 
 import { CardWorkProps } from "@/components/CardWork";
 import { CardWorkSelector } from "@/components/CardWorkSelector";
 

const { reactJS, reactTS, reducers } = {
  reactJS: "React JS",
  reactTS: "React TS",
  reducers: "Reducers",
};

const cardWorkSections = [ reactTS, reducers, reactJS, ];

const cardWorkList : CardWorkProps[] = [
  
  {
    tags: [reactTS, reducers],
    title: "Coffee Delivery",
    description: "Website para pedidos e entrega de cafés com carrinho de compras.",
    imgWork: coffeeDeliveryCardImage,
    link: "https://github.com/Lucas-Gonsalves/coffee-delivery",
  },
  
  {
    tags: [reactTS],
    title: "Todo List",
    description: "Gerenciador de tarefas para adicionar, remover e marca-las como concluídas.",
    imgWork: todoListCardImage,
    link: "https://github.com/Lucas-Gonsalves/to-do_list",
  },
  
  {
    tags: [reactJS],
    title: "Movies Notes",
    description: "Website para anotações e catalogação de filmes assistidos.",
    imgWork: moviesNotesCardImage,
    link: "https://github.com/Lucas-Gonsalves/RocketMovies-FrontEnd",
  },

  {
    tags: [reactTS, reducers],    
    title: "Stopwatch Timer",
    description: "Cronômetro com histórico para gestão de tempo.",
    imgWork: stopwatchTimerCardImage,
    link: "https://github.com/Lucas-Gonsalves/ignite-timer",
  },
];

interface RecentWorksProps {
  id?: string;
}


export function RecentWorks({
  id = "",
}: RecentWorksProps) {
  return(
    <RecentWorksContainer
      id={id}
    >
      <OverlayBackground/>

      <TitleContent>
        <h2>Trabalhos Recentes</h2>

        <p>
          Colocamos suas ideias e, portanto, seus desejos na 
          forma de um projeto web único que inspira você e seus clientes.
        </p>
      </TitleContent>
      

      <CardWorkSelector
        workCardSections={cardWorkSections}
        workCardList={cardWorkList}
      />

    </RecentWorksContainer>
  );
};