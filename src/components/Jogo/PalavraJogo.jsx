import styled from "styled-components";

function PalavraJogo({className}) {
  return (
    <StyledPalavraJogo className={className} >
      _ _ _ _ _ _
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
