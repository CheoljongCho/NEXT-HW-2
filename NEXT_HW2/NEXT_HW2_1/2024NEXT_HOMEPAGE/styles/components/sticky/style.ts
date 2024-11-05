import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

const leftPrimary = keyframes` 
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }

`;
const leftSecondary = keyframes` 
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }

`;

export const StickyContainer = styled.div`
  width: 100%;
  height: calc(100vh + 1000px + 12rem);
  position: relative;
`;

export const StickyContent = styled.div<{ isMobile: boolean }>`
  width: 100%;
  min-height: 100vh;
  padding: 10rem 10%;
  background-color: ${THEME.LIGHT_BLACK};
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  /* &::after {
    content: "";    
    display: block;
    padding-bottom: 56.25%;
  } */
  ${(props) =>
    props.isMobile &&
    css`
      padding: 10rem 8%;
      & div {
        width: 100%;
      }
    `}
`;
export const Sticky = styled.div<{ isMobile: boolean }>`
  width: 100%;
  /* height: 100vh; */
  top: 0px;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  /* background-color: white; */
  ${(props) =>
    props.isMobile &&
    css`
      height: 100vh;
    `}
  & img {
    width: 100vw;
    /* height: 100%; */
    display: block;
    /* object-fit: cover; */
    object-fit: contain;
  }
`;
export const TextWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  font-size: 2.4rem;
  word-break: keep-all;
  color: #fff;
  overflow: hidden;
  position: relative;

  & p {
    line-height: 150%;
    width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
  }
  & > span {
    font-size: 3.6rem;
    font-weight: 600;
  }
  & span big {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 150%;
  }
  & span b {
    color: ${THEME.ORANGE};
  }
  ${(props) =>
    props.isMobile &&
    css`
      font-size: 1.8rem;
      & p {
        width: 100%;
      }
      & p span big {
        font-size: 3.2rem;
        font-weight: 700;
      }
    `}
`;

export const MoreBtn = styled.div<{ isMobile: boolean }>`
  /* width: 8rem; */
  height: 4rem;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${THEME.ORANGE};
  transition: 0.5s;
  ${(props) =>
    !props.isMobile &&
    css`
      &:hover {
        /* background-color: ${THEME.LIGHT_ORANGE}; */
        border-bottom: 1px solid ${THEME.ORANGE};
      }
    `}
`;
