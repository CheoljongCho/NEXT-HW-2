import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  min-height: 100%;
  padding: 6rem 3rem;
`;

export const MainContainer = styled.div<{ isMobile: boolean }>`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  padding-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;

  & > div:last-child {
    border-right: none;
  }

  @media screen and (max-width: 1830px) {
    width: 70%;
  }

  @media screen and (max-width: 1530px) {
    width: 80%;
  }

  @media screen and (max-width: 1350px) {
    width: 90%;
  }

  @media screen and (max-width: 1220px) {
    width: 100%;
  }

  @media screen and (max-width: 1104px) {
    width: 80%;
    justify-content: center;

    & > div:first-child {
      margin-bottom: 15rem;
    }
  }
`;

export const SessionWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;
  width: 50%;
  height: 60rem;
  text-align: center;

  /* &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  } */

  @media screen and (max-width: 710px) {
    width: 30rem;
    height: 30rem;
    &:after {
      display: none;
    }
  }
`;

export const SessionImgBox = styled.div<{ isMobile: boolean }>`
  width: 50rem;
  height: 20rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 745px) {
    width: 20rem;
    height: 14rem;
  }

  @media screen and (max-width: 710px) {
    width: 20rem;
    height: 10rem;
    margin: 0 auto;
  }

  /* &:before {
    content: "";
    width: 100%;
    padding-bottom: 100%;
  } */
`;

export const SessionTitleBox = styled.p<{ isMobile: boolean }>`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  color: ${THEME.ORANGE};
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: 710px) {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const SessionInfoBox = styled.p<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9rem;
  & p {
    width: 90%;

    margin: 0 auto;
    word-break: keep-all;
    white-space: pre-wrap;
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 600;
  }
  margin-bottom: 5rem;

  @media screen and (max-width: 710px) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 4rem;
    height: auto;
  }
`;

export const SessionDayBox = styled.p<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9rem;
  & p {
    width: 90%;

    margin: 0 auto;
    word-break: keep-all;
    white-space: pre-wrap;
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 600;
  }
  margin-bottom: 5rem;

  @media screen and (max-width: 710px) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 4rem;
    margin-top: 5rem;
  }
`;

export const ProjectExampleWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const ProjectTextBox = styled.p`
  font-weight: 600;
  max-width: 30.3rem;
  height: 4rem;
  margin: 0 auto;
  background-color: ${THEME.BLACK_200};
  color: ${THEME.WHITE};
  font-size: 2rem;
  line-height: 4rem;
  text-align: center;
`;

export const ProjectImgBox = styled.p`
  width: 100%;
`;

export const SlideWrapper = styled.p`
  width: 100%;
  margin: 0 auto;
`;

export const ProjectUpdateText = styled.p`
  width: 100%;
  margin: 0 auto;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;

  & > span {
    color: ${THEME.ORANGE};
  }
`;
