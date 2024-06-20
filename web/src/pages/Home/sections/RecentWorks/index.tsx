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
 import { WorkSelector } from "@/components/WorkSelector";
 

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
        <h2>Projetos Recentes</h2>

        <p>
          Veja meus projetos mais recentes, nos quais uni inovação, 
          design moderno e funcionalidades avançadas para criar experiências web excepcionais.
        </p>
      </TitleContent>
      

      <WorkSelector
        workCardSections={cardWorkSections}
        workCardList={cardWorkList}
      />

    </RecentWorksContainer>
  );
};