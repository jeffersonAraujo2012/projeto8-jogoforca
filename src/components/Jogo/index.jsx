import styled from "styled-components";

import ImgForca from "./ImgForca";
import BotaoIniciar from "./BotaoIniciar";
import PalavraJogo from "./PalavraJogo";

export default function Jogo({ className }) {
  return (
    <StyledJogo className={className}>
      <div>
        <ImgForca />
      </div>
      <div>
        <BotaoIniciar />
        <PalavraJogo />
      </div>
    </StyledJogo>
  );
}

const StyledJogo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 50px 40px 38px;

  & > div:first-child {
    display: flex;
    justify-content: flex-start;
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-end;

    margin: 30px 0;
  }
`;