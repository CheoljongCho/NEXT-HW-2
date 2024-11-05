import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  padding: 6rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.isMobile &&
    css`
      padding: 2rem 2rem;
    `}
`;

export const MainContainer = styled.div<{ isMobile: boolean }>`
  width: 80%;
  margin: 0 auto;

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
    `}
`;

export const TextWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  word-break: keep-all;
  color: #333333;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  & p {
    line-height: 150%;
  }

  & .main-text {
    font-size: 2.4rem;
    color: #333333;
    margin-bottom: 3rem;
    color: ${THEME.ORANGE};
  }

  & .sub-text {
    font-size: 1.8rem;
    font-weight: 400;
    color: #333333;
  }

  & .test {
    font-size: 1.5rem;
    margin-top: 4rem;
  }

  ${(props) =>
    props.isMobile &&
    css`
      & .main-text {
        font-size: 2rem;
        color: #333333;
        color: ${THEME.ORANGE};
      }

      & .sub-text {
        font-size: 1.5rem;
        font-weight: 400;
        color: #333333;
      }

      & .test {
        font-size: 1.5rem;
        margin-top: 4rem;
      }

      & img {
        width: 100%;
      }
      & p {
        width: 100%;
      }
    `}
`;

export const ScheduleContainer = styled.div<{ isMobile: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 6rem 0;
  position: relative;
  flex-wrap: wrap;

  @media screen and (max-width: 1281px) {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (max-width: 1030px) {
    justify-content: center;
  }

  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
      align-items: center;
    `}

  & > div:first-child > div > p {
    right: -2rem;
  }

  @media screen and (max-width: 954px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
  }
`;

export const ScheduleWrapper = styled.div<{ isMobile: boolean }>`
  width: 25%;
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h2 {
    font-size: 3rem;
    font-weight: 500;
  }
  & p {
    font-size: 1.8rem;
    line-height: 150%;
    margin: 1rem;
  }

  @media screen and (max-width: 1680px) {
    width: 21%;
    height: 13rem;

    & h2 {
      font-size: 2rem;
      font-weight: 500;
    }
    & p {
      font-size: 1.3rem;
      line-height: 150%;
      margin: 1rem;
    }
  }

  @media screen and (max-width: 1281px) {
    width: 34rem;
    height: 13rem;
    margin-bottom: 6rem;
  }

  ${(props) =>
    props.isMobile &&
    css`
      width: 80%;
      margin-bottom: 6rem;
    `}

  @media screen and (max-width: 300px) {
    width: 100%;
    height: 12rem;
  }
`;

export const ScheduleEventBox = styled.div`
  position: relative;
  width: 13rem;
  height: 90%;
  background-color: ${THEME.ORANGE};
  font-weight: 700;
  margin-right: 1.3rem;

  & p {
    position: absolute;
    bottom: -2rem;
    right: -1rem;
    font-size: 9rem;
    line-height: 110%;
    color: #ffffff;
  }

  @media screen and (max-width: 1680px) {
    width: 9rem;
    height: 12rem;
    margin-bottom: 0rem;

    & p {
      font-size: 6rem;
    }

    /* @media screen and (max-width: 1300px) {
    width: 80%;
    height: 15rem;
    margin-bottom: 6rem;

    & p {
      font-size: 9rem;
    } */
  }
`;

export const ScheduleInfoBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;

  & p {
    color: #5f5f5f;
  }
`;

export const LottieContainer = styled.div<{ isMobile: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 6rem 10%;
  position: relative;
  /* background: radial-gradient(
    circle farthest-side at 50% 100%,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0)
  ); */
  /* background: linear-gradient(); */
  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
      align-items: center;
      padding: 0rem 7rem;
    `}

  @media screen and (max-width: 530px) {
    padding: 0;
  }
`;
