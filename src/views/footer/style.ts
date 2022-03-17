import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const Rodape = styled.footer`
  width: 100%;
  background-color: #0d0e13;
  margin-top: ${pixelToRem(-80)};
  background-image: url(assets/Starts.svg);

  figure {
    img {
      width: 100%;
    }
  }

  .footer {
    background-color: #0d0e13;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${pixelToRem(136)};
    padding: 0 ${pixelToRem(112)};

    .sociais {
      width: ${pixelToRem(111)};
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: ${pixelToRem(34)};
      color: #fff;
    }
  }
`;
