import StyledLetras from "./components/Letras";
import Letra from "./components/Letras/Letra";
import { alfabeto } from "./data";
import "./reset.css";
import "./general.css";
import Jogo from "./components/Jogo";

function App() {
  return (
    <>
      <Jogo />
      <StyledLetras>
        {alfabeto.map((letra) => {
          console.log(letra);
          return <Letra letra={letra} />;
        })}
      </StyledLetras>
    </>
  );
}

export default App;
