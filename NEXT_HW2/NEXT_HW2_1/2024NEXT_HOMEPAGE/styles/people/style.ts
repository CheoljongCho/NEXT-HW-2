import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  padding-top: 107px;

  ${(props) =>
    props.isMobile &&
    css`
      padding: 60px 24px 24px;
    `}
`;
