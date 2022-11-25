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
  const [numErros, setNumErros] = useState(0);

  function handlerLetrasClick(letra) {
    if (!letrasDesativadas.includes(letra)) {
      setLetrasDesativadas(letrasDesativadas + letra);
      if (palavra.includes(letra)) {
        setLetrasDescobertas(letrasDescobertas + letra);
      } else {
        const novoNumErros = numErros + 1;
        if (novoNumErros >= 6) {
          setNumErros(6);
          console.log("JOGO ENCERRADO - VOCÊ PERDEU!");
        } else setNumErros(novoNumErros);
      }
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

  function handlerBtnChutar(palavraChute) {
    if (palavraChute === palavra) {
      console.log("Vitória");
    } else {
      console.log("Derrota");
      setNumErros(6);
    }
  }

  return (
    <>
      <Jogo
        palavra={palavra}
        onClickBtnIniciar={handlerBtnIniciar}
        letrasDescobertas={letrasDescobertas}
        numErros={numErros}
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
      <Chute onClickBtnChutar={handlerBtnChutar}/>
    </>
  );
}

export default App;
