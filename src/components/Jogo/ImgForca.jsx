import styled from "styled-components";

function ImgForca({ className, numErros }) {
  return (
    <StyledImgForca
      className={className}
      src={`./assets/forca${numErros}.png`}
      data-test="game-image"
    />
  );
}

const StyledImgForca = styled.img`
  width: 280px;
`;

export default ImgForca;
