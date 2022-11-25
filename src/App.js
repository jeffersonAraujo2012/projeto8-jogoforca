import { useState } from "react";

import StyledLetras from "./components/Letras";
import Letra from "./components/Letras/Letra";
import { alfabeto, palavras } from "./palavras";
import "./reset.css";
import "./general.css";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";

function App() {
  const [letrasDesativadas, setLetrasDesativadas] = useState(alfabeto);
  const [palavra, setPalavra] = useState("");
  const [letrasDescobertas, setLetrasDescobertas] = useState("");

  function handlerLetrasClick(letra) {
    if (!letrasDesativadas.includes(letra)) {
      setLetrasDesativadas(letrasDesativadas + letra);
    }
  }

  function handlerBtnIniciar() {
    if (!palavra) {
      const tamanhoPalavras = palavras.length;
      const indexSorteado = Math.floor(Math.random() * tamanhoPalavras);
      setPalavra(palavras[indexSorteado]);
      setLetrasDesativadas("");
    }
  }

  return (
    <>
      <Jogo
        palavra={palavra}
        onClickBtnIniciar={handlerBtnIniciar}
        letrasDescobertas={letrasDescobertas}
      />
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
