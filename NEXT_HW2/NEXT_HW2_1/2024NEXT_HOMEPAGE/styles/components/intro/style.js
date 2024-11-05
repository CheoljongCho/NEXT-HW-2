import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  z-index: 20;
`;
export const Video = styled.video`
  transform: scale(1);
`;
export const IMG = styled.img`
  transform: scale(1);
`;
export const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
`;
