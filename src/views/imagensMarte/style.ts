import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

import { Imgs } from ".";

export const Divs = styled.div<Imgs>`
  display: flex;
  height: ${pixelToRem(351)};
  width: 100%;
  flex-direction: row;
  background-color: transparent;
  padding-left: ${pixelToRem(112)};
  margin-top: ${pixelToRem(-450)};
  gap: ${pixelToRem(106)};
  .desc {
    width: 27%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    img {
      margin-bottom: ${pixelToRem(13)};
    }

    h3 {
      font-weight: 700;
      font-size: ${pixelToRem(32)};
      line-height: ${pixelToRem(48)};
      letter-spacing: 1px;
      color: #ffffff;
      margin-bottom: ${pixelToRem(16.71)};
    }

    button {
      background: transparent;
      border: none;
      color: #ff8c70;
      font-weight: 700;
      font-size: ${pixelToRem(18)};
      line-height: ${pixelToRem(26)};
      display: flex;
      align-items: center;
      height: ${pixelToRem(33)};
    }
  }

  .galeria {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${pixelToRem(18)};
    flex-wrap: wrap;

    .imagens {
      display: flex;
      flex-direction: row;
      gap: ${pixelToRem(32)};
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;
