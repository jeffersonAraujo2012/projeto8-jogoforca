import StyledLetras from "./components/Letras";
import Letra from "./components/Letras/Letra";
import { alfabeto } from "./data";
import "./reset.css";
import "./general.css";

function App() {
  return (
    <>
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
