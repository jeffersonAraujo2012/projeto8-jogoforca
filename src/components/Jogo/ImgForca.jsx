import styled from "styled-components";

function ImgForca({ className }) {
  return <StyledImgForca className={className} src="./assets/forca0.png" />;
}

const StyledImgForca = styled.img`
  width: 280px;
`;

export default ImgForca;