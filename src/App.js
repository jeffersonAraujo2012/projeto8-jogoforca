import { useState } from "react";

import StyledLetras from "./components/Letras";
import Letra from "./components/Letras/Letra";
import { alfabeto } from "./palavras";
import "./reset.css";
import "./general.css";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";

function App() {
  const [letrasDesativadas, setLetrasDesativadas] = useState(alfabeto);

  function handlerLetrasClick(letra) {
    if (!letrasDesativadas.includes(letra)) {
      setLetrasDesativadas(letrasDesativadas + letra);
    }
  }

  return (
    <>
      <Jogo />
      <StyledLetras>
        {alfabeto.map((letra) => {
          return (
            <Letra
              onClick={() => handlerLetrasClick(letra)}
              letra={letra}
              habilitado={letrasDesativadas.includes(letra) ? false : true}
              key={letra}
            />
          );
        })}
      </StyledLetras>
      <Chute />
    </>
  );
}

export default App;
