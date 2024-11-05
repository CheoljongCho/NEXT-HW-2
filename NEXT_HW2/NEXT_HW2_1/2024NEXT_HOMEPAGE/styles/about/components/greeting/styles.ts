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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;

  & div img {
    width: 100%;
  }

  ${(props) =>
    props.isMobile &&
    css`
      padding: 2rem 2rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & div {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 5rem;
      }
      & div:last-child p {
        font-size: 1.5rem;
      }
      & div:last-child p:first-child {
        font-size: 2rem;
        font-weight: 500;
        padding-bottom: 3rem;
      }
    `}
`;

// export const MainWrapper = styled.div<{ isMobile: boolean }>`
//   margin: 3rem;
//   display: flex;
//   align-items: center;

// `;

export const ImageWrapper = styled.div`
  width: 38.2%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageElementWrapper = styled.div`
  width: 53.5%;
  min-width: 250px;
  position: relative;
  &:after {
    content: "";
    padding-bottom: 133%;
    display: block;
  }
  & img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div<{ isMobile: boolean }>`
  width: 61.8%;
  padding-right: 8rem;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  ${(props) =>
    props.isMobile &&
    css`
      padding-right: 0;
    `}
`;

export const TextElementWrapper = styled.div`
  width: 100%;
  position: relative;

  font-size: 1.6rem;
  word-break: keep-all;
  color: #000;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & p {
    line-height: 150%;
    padding-bottom: 1rem;
  }

  & > span {
    font-size: 3.6rem;
    font-weight: 600;
  }
  & span b {
    color: ${THEME.ORANGE};
  }
`;
