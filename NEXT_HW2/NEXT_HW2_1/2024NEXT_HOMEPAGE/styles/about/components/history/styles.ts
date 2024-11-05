import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const color = keyframes`
0%{
  filter: grayscale(1)
}
100%{
  filter: grayscale(0)
}
`;
export const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  padding: 6rem 3rem;
  background: white;
  display: relative;

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      padding: 2rem 2rem;
    `}
`;

// export const MainWrapper = styled.div<{ isMobile: boolean }>`
//   width: 100%;

//   ${(props) =>
//     props.isMobile &&
//     css`
//         width: 100%;
//     `}
// `;

export const MainContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding-left: 12rem;

  ${(props) =>
    props.isMobile &&
    css`
      padding-left: 6rem;
      & div {
        width: 100%;
      }
    `}
`;

export const TextWrapper = styled.div`
  width: 61.8%;
  padding-bottom: 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const FlexRow = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
      & button {
        margin-top: 2rem;
      }
    `}
`;

export const TitleTextElementWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  position: relative;
  padding-bottom: 1.6rem;

  font-size: 1.8rem;
  word-break: keep-all;
  color: #000;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & > span {
    font-size: 3.2rem;
    font-weight: 600;
  }
  & span b {
    color: ${THEME.ORANGE};
  }

  ${(props) =>
    props.isMobile &&
    css`
      font-size: 2rem;
    `}
`;

export const TextElementWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  position: relative;

  font-size: 1.6rem;
  word-break: keep-all;
  color: #000;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & p {
    line-height: 220%;
    padding: 0rem;
  }

  & > span {
    font-size: 3.6rem;
    font-weight: 600;
  }
  & span b {
    color: ${THEME.ORANGE};
  }

  ${(props) =>
    props.isMobile &&
    css`
      font-size: 1.5rem;
    `}
`;

export const Badge = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  cursor: none;

  margin: 0;
  padding: 0;

  width: 5rem;
  height: 2rem;
  font-weight: 800;
  background: #292929;

  border-radius: 0.9rem;
  font-size: 0.8rem;
  text-align: center;
  line-height: 0; // line-height 적용되면 자동으로 세로 가운데 정렬됨

  color: #f7941e;
`;
