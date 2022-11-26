import styled from "styled-components";

function PalavraJogo({ className, palavra, letrasDescobertas, gameStatus }) {
  function exibirPalavra() {
    let vetorPalavra = [];
    if (palavra) {
      vetorPalavra = [...palavra].map((letra) => {
        return letrasDescobertas.includes(letra) ? letra : "_";
      });
    }
    return vetorPalavra;
  }
  return (
    <StyledPalavraJogo
      className={className}
      gameStatus={gameStatus}
      data-test="word"
      data-answer={palavra ? palavra : ""}
    >
      {exibirPalavra().map((char) => char + " ")}
    </StyledPalavraJogo>
  );
}

const StyledPalavraJogo = styled.div`
  color: ${(props) => {
    if (props.gameStatus === "DERROTA") {
      return "red";
    }
    if (props.gameStatus === "VITORIA") {
      return "green";
    }
    return "black";
  }};

  font-family: "Noto Sans";
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;

  display: flex;
  align-items: center;
  text-align: center;
`;

export default PalavraJogo;
