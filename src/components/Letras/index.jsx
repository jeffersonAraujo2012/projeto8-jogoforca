import styled from "styled-components";

function Letras({className, children}) {
  return(
    <StyledLetras className={className}>
      {children}
    </StyledLetras>
  );
}

const StyledLetras = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 680px;
`

export default Letras;