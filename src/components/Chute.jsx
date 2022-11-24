import styled from "styled-components";

function Chute({className}) {
  return (
    <StyledChute className={className}>
      <p>Já sei a palavra!</p>
      <input type="text" />
      <button>Chutar</button>
    </StyledChute>
  );
}

const StyledChute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  & > p {
    color: black;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 23px;
    margin-right: 15px;
  }

  & > input {
    width: 350px;
    height: 40px;
    margin-right: 15px;

    border: 1px solid #cccccc;
    border-radius: 3px;

    box-shadow: 2px 2px 5px 0px #00000040;
  }

  & > button {
    width: 100px;
    height: 40px;

    background: #e1ecf4;
    border: 1px solid #7aa7c7;
    border-radius: 3px;

    color: #3C76A1;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;

export default Chute;