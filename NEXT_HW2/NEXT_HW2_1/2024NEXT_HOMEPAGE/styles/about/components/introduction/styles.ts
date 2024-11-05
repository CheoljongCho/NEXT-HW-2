import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const color = keyframes`
0%{
  filter: grayscale(0)
}
8%{
  filter: grayscale(0)
}
100%{
  filter: grayscale(0.7)
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
  margin: 0;
  padding: 0;
  background: white;

  position: relative;
`;

export const MainImageWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
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
  object-fit: cover;

  transition: all 0.2s linear;
}


${(props) =>
  props.isMobile &&
  css`

  `}
`;

export const ContainerBG = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: contain;
  filter: grayscale(1);
  animation: ${color} 5s 0s forwards;
`;

export const MainTextWrapper = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: 100vh;
  padding: 20rem;
  position: absolute;
  top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );

  font-size: 2.8rem;
  word-break: keep-all;
  color: #000;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  & p {
    font-size: 2.8rem;
    font-weight: 600;
    color: ${THEME.WHITE}
  }

  & > span {
    font-size: 3.6rem;
    font-weight: 600;
    color: ${THEME.WHITE}
  }

  & span b {
    color: ${THEME.ORANGE};
  }

  & img {
    width: 100%;
  }


  ${(props) =>
    props.isMobile &&
    css`
    width: 100%;
    height: 100vh;
    padding: 20rem 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
  
    font-size: 1.8rem;
    word-break: keep-all;
    color: #000;
    overflow: hidden;

    & p {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${THEME.WHITE}
    }
  
    & > span {
      font-size: 2.4rem;
      font-weight: 600;
      color: ${THEME.WHITE}
    }
  
    & span b {
      color: ${THEME.ORANGE};
    }
  
    & img {
      width: 100%;
    }

    `}
`;