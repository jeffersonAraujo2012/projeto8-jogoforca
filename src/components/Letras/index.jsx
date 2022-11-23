import styled from "styled-components";

function Letras({className, children}) {
  return(
    <div className={className}>
      {children}
    </div>
  );
}

const StyledLetras = styled(Letras)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 680px;
`

export default StyledLetras;