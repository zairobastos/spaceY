import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";
export const Cabecalho = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: ${pixelToRem(112)};
  height: ${pixelToRem(89)};
`;
export const Div = styled.div`
  width: 100%;
  margin: 0;
  background: #04032c;
  background-image: url(assets/Starts.svg);
  section {
    display: flex;
    flex-direction: column;
    background: #040327;
    padding-left: ${pixelToRem(32)};
    margin-right: ${pixelToRem(76.05)};
    .desc {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .apresentacao {
        width: 60%;
        margin-top: ${pixelToRem(84)};

        .atencao {
          color: #f5d15f;
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 2rem;
          letter-spacing: 0.313rem;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        h1 {
          color: #fff;
          font-size: 3.875rem;
          line-height: ${pixelToRem(82)};
          font-weight: 800;
          letter-spacing: 0.063rem;
          margin-bottom: 1.5rem;
          span {
            color: #f5d15f;
          }
        }
        .texto {
          font-weight: normal;
          font-size: 1.125rem;
          line-height: 1.5rem;
          letter-spacing: 0.063rem;
          color: #d5d5db;
          margin-bottom: 2rem;
          width: 90%;
        }
        button {
          width: 16.5rem;
          height: 3.25rem;
          background-color: #e85937;
          font-weight: bold;
          font-size: 1.125rem;
          line-height: 1.625rem;
          border: none;
          color: #ffffff;
          border-radius: 6px;
        }
      }
      figure {
        margin-bottom: ${pixelToRem(98.59)};
        position: absolute;
        right: 0px;
        top: 0.625rem;
      }
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  width: 100%;
  height: ${pixelToRem(112.41)};
  justify-content: space-between;
  margin: ${pixelToRem(139.13)} 0 ${pixelToRem(26)} 0;
`;
