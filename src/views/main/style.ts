import styled from "styled-components";

import pixelToRem from "../../utils/pxToRem";

export const Maini = styled.main`
  background: linear-gradient(180deg, #040327 0%, #0d0e13 24.49%);

  .starts-background {
    background-image: url(assets/Starts.svg);
    .Planeta-desc {
      background-repeat: no-repeat;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: ${pixelToRem(42)};
      .marte {
        margin-left: ${pixelToRem(41)};
        width: ${pixelToRem(621)};
        height: ${pixelToRem(621)};
        z-index: 3;
      }
      div {
        width: calc(100% - ${pixelToRem(795)});
        margin-top: ${pixelToRem(100)};
        .atencao {
          color: #f5d15f;
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 2rem;
          letter-spacing: 0.313rem;
          text-transform: uppercase;
          margin-bottom: ${pixelToRem(14)};
        }
        h1 {
          font-weight: 700;
          font-size: ${pixelToRem(32)};
          line-height: ${pixelToRem(48)};
          letter-spacing: 1px;
          color: #ffffff;
          margin-bottom: ${pixelToRem(26)};
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 1px;
          color: #d5d5db;

          &:nth-child(3) {
            margin-bottom: ${pixelToRem(24)};
          }
        }
      }
    }

    figure {
      img {
        left: 0;
        margin-top: ${pixelToRem(-600)};
        z-index: 1;
      }
    }
  }
`;
