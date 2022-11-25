import styled from "styled-components";

import ImgForca from "./ImgForca";
import BotaoIniciar from "./BotaoIniciar";
import PalavraJogo from "./PalavraJogo";

export default function Jogo({
  className,
  palavra,
  onClickBtnIniciar,
  letrasDescobertas,
  numErros,
}) {
  return (
    <StyledJogo className={className}>
      <div>
        <ImgForca numErros={numErros}/>
      </div>
      <div>
        <BotaoIniciar onClick={onClickBtnIniciar} />
        <PalavraJogo palavra={palavra} letrasDescobertas={letrasDescobertas} />
      </div>
    </StyledJogo>
  );
}

const StyledJogo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;
  padding: 0 50px 0 38px;
  width: 100%;

  & > div:first-child {
    display: flex;
    justify-content: flex-start;
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    margin: 30px 0;
  }
`;
