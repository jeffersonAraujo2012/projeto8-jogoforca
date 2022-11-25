import styled from "styled-components";

function PalavraJogo({ className, palavra, letrasDescobertas }) {
  function exibirPalavra() {
    let vetorPalavra = [];
    console.log(palavra);
    if (palavra) {
      vetorPalavra = [...palavra].map((letra) => {
        return letrasDescobertas.includes(letra) ? letra : "_";
      });
    }
    return vetorPalavra;
  }
  return (
    <StyledPalavraJogo className={className}>
      {exibirPalavra().map((char) => char + " ")}
    </StyledPalavraJogo>
  );
}

const StyledPalavraJogo = styled.div`
  font-family: "Noto Sans";
  font-weight: 700;
  font-size: 50px;
  line-height: 68px;

  display: flex;
  align-items: center;
  text-align: center;
`;

export default PalavraJogo;
