import { useState } from "react";

import StyledLetras from "./components/Letras";
import Letra from "./components/Letras/Letra";
import { alfabeto, palavras } from "./palavras";
import "./reset.css";
import "./general.css";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";

const enumGameStatus = {
  "VITORIA": "VITORIA",
  "DERROTA": "DERROTA",
  "EM_ANDAMENTO": "EM ANDAMENTO",
  "AGUARDANDO_INICIO": "AGUARDANDO INICIO",
}

function App() {
  const [letrasDesativadas, setLetrasDesativadas] = useState(alfabeto);
  const [palavra, setPalavra] = useState("");
  const [letrasDescobertas, setLetrasDescobertas] = useState("");
  const [numErros, setNumErros] = useState(0);
  const [gameStatus, setGameStatus] = useState(enumGameStatus.AGUARDANDO_INICIO);

  function ehVitoria(numLetrasDescobertas) {
    const vetorPalavraSemLetrasRepetidas = [...palavra].filter(
      (letra, i) => palavra.indexOf(letra) === i
    );
    if (vetorPalavraSemLetrasRepetidas.length === numLetrasDescobertas) {
      return true;
    } else {
      return false;
    }
  }

  function handlerLetrasClick(letra) {
    if (!letrasDesativadas.includes(letra)) {
      setLetrasDesativadas(letrasDesativadas + letra);
      if (palavra.includes(letra)) {
        const novaLetrasDescobertas = letrasDescobertas + letra;
        setLetrasDescobertas(novaLetrasDescobertas);
        if (ehVitoria(novaLetrasDescobertas.length)) {
          encerrarJogo(enumGameStatus.VITORIA);
        }
      } else {
        const novoNumErros = numErros + 1;
        if (novoNumErros >= 6) {
          encerrarJogo(enumGameStatus.DERROTA);
        } else setNumErros(novoNumErros);
      }
    }
  }

  function handlerBtnIniciar() {
    if (gameStatus !== enumGameStatus.EM_ANDAMENTO) {
      setGameStatus(enumGameStatus.EM_ANDAMENTO);
      resetarJogo();
      const tamanhoPalavras = palavras.length;
      const indexSorteado = Math.floor(Math.random() * tamanhoPalavras);
      setPalavra(palavras[indexSorteado]);
      setLetrasDesativadas("");
    }
  }

  function handlerBtnChutar(palavraChute) {
    if (gameStatus === enumGameStatus.EM_ANDAMENTO) {
      if (palavraChute === palavra) {
        encerrarJogo(enumGameStatus.VITORIA);
      } else {
        encerrarJogo(enumGameStatus.DERROTA);
      }
    }
  }

  function resetarJogo() {
    setLetrasDescobertas("");
    setNumErros(0);
  }

  function encerrarJogo(status) {
    status.toUpperCase();

    if (status === enumGameStatus.DERROTA || status === enumGameStatus.VITORIA) {
      setLetrasDesativadas(alfabeto);
      setLetrasDescobertas(palavra);
    }

    if (status === enumGameStatus.DERROTA) {
      setGameStatus(enumGameStatus.DERROTA);
      setNumErros(6);
    } else if (status === enumGameStatus.VITORIA) {
      setGameStatus(enumGameStatus.VITORIA);
    } else {
      throw `Status de encerramento inválido. Esperava-se 'DERROTA' OU 'VITORIA', mas recebeu ${status}`;
    }
  }

  return (
    <>
      <Jogo
        palavra={palavra}
        onClickBtnIniciar={handlerBtnIniciar}
        letrasDescobertas={letrasDescobertas}
        numErros={numErros}
        gameStatus={gameStatus}
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
      <Chute onClickBtnChutar={handlerBtnChutar} gameStatus={gameStatus} />
    </>
  );
}

export default App;
