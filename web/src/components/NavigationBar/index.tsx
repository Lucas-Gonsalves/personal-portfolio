import { NavigationBarContainer } from "./styles";


export function NavigationBar() {
  return (
    <NavigationBarContainer>

      <ul>
        <li>
          <button>Serviços</button>
        </li>

        <li>
          <button>Projetos</button>
        </li>

        <li>
          <button>Sobre</button>
        </li>
        
        <li>
          <button>Habilidades</button>
        </li>

        <li>
          <button>Contatos</button>
        </li>
      </ul>

    </NavigationBarContainer>
  );
};