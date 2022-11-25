import styled from "styled-components";

function BotaoIniciar({ className, onClick }) {
  return (
    <StyledBotaoIniciar className={className} onClick={onClick}>
      Escolher Palavra
    </StyledBotaoIniciar>
  );
}

const StyledBotaoIniciar = styled.button`
  width: 200px;
  height: 60px;

  color: white;
  font-size: 20px;
  font-weight: 700;
  font-family: "Roboto", serif;
  line-height: 23px;

  background-color: #27ae60;
  border: none;
  border-radius: 8px;

  cursor: pointer;
`;

export default BotaoIniciar;
