import styled from "styled-components";
import { useState } from "react";

const StyledLetra = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin: 6px;

  color: ${(props) => {
    return props.habilitado ? "#39739D" : "#798A9F";
  }};
  font-size: 1rem;
  font-weight: 700;
  font-family: "Roboto", serif;
  line-height: 19px;

  border: 1px solid #7aa7c7;
  border-radius: 3px;
  cursor: ${(props) => {
    return props.habilitado ? "pointer" : "default";
  }};

  background-color: ${(props) => {
    return props.habilitado ? "#E1ECF4" : "#9FAAB5";
  }};
`;

function Letra({ className, letra }) {
  const [habilitado, setHabilitado] = useState(true);

  function handlerClickLetra() {
    setHabilitado(false);
  }

  return (
    <StyledLetra
      className={className}
      habilitado={habilitado}
      onClick={handlerClickLetra}
    >
      {letra}
    </StyledLetra>
  );
}

export default Letra;
