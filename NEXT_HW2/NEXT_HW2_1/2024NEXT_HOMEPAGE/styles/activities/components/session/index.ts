import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  min-height: 100%;
  padding: 6rem 3rem;
`;

export const MainContainer = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;

  ${(props) =>
    props.isMobile &&
    css`
      padding: 0;
    `}

  & > div {
    border-right: 2px solid ${THEME.GRAY_200};
  }

  & > div:last-child {
    border-right: none;
  }
`;

export const SessionWrapper = styled.div<{ isMobile: boolean }>`
  width: 33%;
  height: 100%;
  padding-top: 3%;
  padding-bottom: 8%;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      height: 100%;
      padding: 2% 0 10%;
      border: none !important;
    `}
`;

export const SessionImgBox = styled.div<{ isMobile: boolean }>`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;

  /* &:after {
    content: "";
    display: block;
    padding-bottom: 56.25%;
  } */

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
    `}
`;

export const SessionTitleBox = styled.div<{ isMobile: boolean }>`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  & > p:first-child {
    color: ${THEME.ORANGE};
    font-size: 2.4rem;
    font-weight: 600;
  }

  & > span {
    width: 2px;
    height: 1.5rem;
    background-color: ${THEME.BLACK_100};
    margin: 0 0.8rem 0 1.3rem;
  }

  & > p:last-child {
    color: ${THEME.BLACK_100};
    font-size: 1.8rem;
    font-weight: 400;
  }

  @media screen and (max-width: 1090px) {
    flex-direction: column;

    & > p:first-child {
      color: ${THEME.ORANGE};
      font-size: 2rem;
      font-weight: 700;
    }

    & > span {
      width: 2px;
      height: 1.5rem;
      background-color: ${THEME.BLACK_100};
      margin: 0 0.8rem 0 1.3rem;
      width: 0px;
      height: 0px;
    }

    & > p:last-child {
      color: ${THEME.BLACK_100};
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;

export const SessionInfoBox = styled.p<{ isMobile: boolean }>`
  width: 90%;
  margin: 0 auto;
  line-height: 2.3rem;
  word-break: keep-all;
  white-space: pre-wrap;
  font-size: 1.5rem;
  font-weight: 600;
`;
