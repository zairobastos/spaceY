import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const Div = styled.div`
  padding-top: ${pixelToRem(250)};
  background-color: #0d0e13;
  background-image: url(assets/Starts.svg);
  display: flex;
  gap: ${pixelToRem(50)};

  .ingresso {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    form {
      height: ${pixelToRem(792)};
      background-color: #0e0d40;
      width: 76.5%;
      margin-left: ${pixelToRem(123)};
      border-radius: ${pixelToRem(20)};
      padding: ${pixelToRem(39)} ${pixelToRem(46)} 0 ${pixelToRem(53)};

      button {
        height: ${pixelToRem(65)};
        width: 100%;
        margin-top: ${pixelToRem(32)};
        background-color: #e85937;
        border: none;
        border-radius: 6px;

        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        text-align: center;

        color: #ffffff;
      }
    }
    .txt {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      h3 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 1px;
        color: #ffffff;
        width: 60%;
      }
      p {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #ffffff;
        opacity: 0.7;
        width: 70%;
        margin-bottom: ${pixelToRem(32)};
      }
    }
    img {
      margin-bottom: ${pixelToRem(18)};
    }
    .inputs {
      display: flex;
      flex-direction: column;
      gap: ${pixelToRem(24)};

      .input {
        display: flex;
        flex-direction: column;
        gap: ${pixelToRem(12)};

        label {
          font-weight: 400;
          font-size: 1rem;
          line-height: ${pixelToRem(24)};
          color: #ffffff;
        }

        input {
          height: ${pixelToRem(56)};
          border-radius: ${pixelToRem(6)};
          background-color: transparent;
          color: #ffffff;
          font-size: 1rem;
          padding: 0 10px;
          border: 1px solid #d5d5db;
        }
      }

      .marque {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        height: ${pixelToRem(24)};

        label {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.5rem;
          color: #d5d5db;
        }

        input {
          all: unset;
          height: ${pixelToRem(24)};
          width: ${pixelToRem(24)};
          border: 1.5px solid #ffffff;
          box-sizing: border-box;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        input:checked {
          background-color: #ff8c70;
          border: 1.5px solid #0d0e13;
          background-image: url(assets/shape.svg);
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
  }
`;
