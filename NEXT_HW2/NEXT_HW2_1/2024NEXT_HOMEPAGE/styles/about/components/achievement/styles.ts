import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div<{ isMobile: boolean }>`
  width: 100%;
  padding: 6rem 3rem;
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      & div {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    `}
`;

export const MainWrapper = styled.div<{ isMobile: boolean }>`
  width: 80%;

  ${(props) =>
    props.isMobile &&
    css`
      width: 75%;
    `}
`;

export const TextWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  position: relative;

  font-size: 1.8rem; //sub-text
  font-weight: 400;
  word-break: keep-all;
  color: #000;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  & p {
    line-height: 180%;
    padding-bottom: 3rem;
  }

  & span { //main-text
    font-size: 2.4rem;
    font-weight: 600;
  }
  .titleX {
    font-size: 2.4rem;
  }

  & span b { //sub-text
    font-size: 1.8rem;
    font-weight: 600;
    color: ${THEME.ORANGE};
  }



  ${(props) =>
    props.isMobile &&
    css`
      font-size: 1.5rem; //sub-text

      & p {
        line-height: 180%;
        padding-bottom: 3rem;
      }

      & span {
        //main-text
        font-size: 2rem;
      }
      .titleX {
        font-size: 2rem;
      }

      & span b {
        //sub-text //sub-text
        font-size: 1.5rem;
        color: ${THEME.ORANGE};
      }
    `}

  
}

`;

export const ImageWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 5rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  & div {
    width: 10%;
    margin: 1rem;
  }
  & div img {
    width: 100%;
  }

  ${(props) =>
    props.isMobile &&
    css`
      padding: 0rem;

      flex-direction: row !important;
      justify-content: space-between;
      & div {
        width: 20%;
        margin: 0.4rem;
        margin-top: 5rem;
      }
    `}

  }
`;

export const ImageElementWrapper = styled.div<{ isMobile: boolean }>`
width: 20%;
padding: 2rem;
padding-top: 5rem;
position: relative;


&:after {
  content: "";
  padding-bottom: 100%;
  display: block;
}
& img {
  position: absolute;

  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.2s linear;
  border-radius: 2rem;
}

& img:hover {
  transform: scale(1.13);
}

${(props) =>
  props.isMobile &&
  css`
    width: 10%;
    padding: 0rem;
    &:after {
      content: "";
      padding-bottom: 100%;
      display: block;
    }
  `}
}
`;
