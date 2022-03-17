import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

import { Data } from ".";

export const Divicons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(8.41)};
  width: ${pixelToRem(222)};
  height: ${pixelToRem(112)};
`;

export const Image = styled.div<Data>`
  width: ${pixelToRem(56)};
  height: ${pixelToRem(56)};
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
`;

export const Text = styled.p`
  font-size: ${pixelToRem(16)};
  color: #d5d5db;
  line-height: ${pixelToRem(24)};
  letter-spacing: ${pixelToRem(1)};
`;
