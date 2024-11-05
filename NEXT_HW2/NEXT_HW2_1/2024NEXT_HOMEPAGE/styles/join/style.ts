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
export const slideIn = keyframes`
0%{
  transform: translate(-50%, 100%);
}
100%{
  transform: translate(-50%, 70%);
}
`;
export const slideOut = keyframes`
0%{
  transform: translate(-50%, 70%);
}
100%{
  transform: translate(-50%, 150%);
}
`;
export const stanby = keyframes`
0%{
  width:50%;
  top:0;
}
50%{
  width:100%;
  top:30%;
}
100%{
  width: 50%;
  top:0;
}
`;
export const launch = keyframes`
0%{
  bottom: 0;
}
100%{
  bottom:200vh;
}
`;

export const vibrate = keyframes`
0%{
  bottom: 0;
}
100%{
  bottom:200vh;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #000;
`;
export const SpaceContainer = styled.div<{ isMobile: boolean }>`
  width: 33%;
  min-height: 100vh;
  max-width: 800px;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  pointer-events: none;
  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      max-width: 430px;
    `}
`;

export const Planet = styled.div<{ launched: boolean }>`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  animation: ${slideIn} 2s 2s forwards;
  pointer-events: auto;
  ${(props) =>
    props.launched &&
    css`
      transform: translate(-50%, 70%);
      animation: ${slideOut} 2s 2s forwards;
    `}
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const RocketContainer = styled.div<{ launched: boolean }>`
  width: 30%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  z-index: 4;
  cursor: pointer;
  pointer-events: auto;
  &::after {
    content: "";
    display: block;
    padding-bottom: 200%;
  }
  ${(props) =>
    props.launched &&
    css`
      animation: ${launch} 4s 2s forwards;
    `}
`;
export const Rocket = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: auto;
  & img {
    width: 100%;
  }
`;
export const Fire = styled.div<{ launched: boolean }>`
  width: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 4;
  transform: translateX(-50%);
  animation: ${stanby} 4s;
  transition: 3s;
  ${(props) =>
    props.launched &&
    css`
      width: 100%;
      top: 30%;
    `}
`;

export const ModalContainer = styled.div<{ infoOpen: boolean }>`
  width: 90%;
  max-width: 800px;
  padding: 3rem;
  background-color: #151515;
  color: white;
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  pointer-events: ${(props) => (props.infoOpen ? "auto" : "none")};
  /* align-items: center; */
`;
export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 800px;
  max-height: calc(80vh - 6rem);
  overflow-y: scroll;
`;
export const CloseBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
  font-weight: 600;
  & div {
    cursor: pointer;
  }
`;
export const TitleWrapper = styled.div<{ isMobile: boolean }>`
  width: 80%;
  max-width: 800px;
  position: absolute;
  /* max-height: 30vh; */
  z-index: 4;
  top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  flex-wrap: wrap;

  pointer-events: none;
  opacity: 0;
  animation: ${fadeIn} 2s 4s forwards;
  & img {
    width: 100%;
    /* max-height: 100%; */
    margin-bottom: 2rem;
    ${(props) =>
      !props.isMobile &&
      css`
        width: 60%;
      `}
  }
  & p {
    font-family: "GmarketSansMedium";
    font-weight: 700;
    font-size: 4rem;
  }
`;
export const RocketInfo = styled.div`
  width: 100%;
  margin-top: 1rem;
  /* position: absolute; */
  text-align: center;
  /* left: 0; */
  opacity: 0;
  /* bottom: 20px; */
  color: white;

  animation: ${fadeIn} 1s 5s alternate infinite;
  & p {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${THEME.LIGHT_GRAY};
  }
`;
export const InfoModal = styled.div`
  display: flex;
  flex-direction: column;
  & span {
    font-size: 2rem;
    color: ${THEME.ORANGE};
    font-weight: 500;
  }
  & h2 {
    font-size: 2.4rem;
    text-align: center;
    font-weight: 700;
    color: ${THEME.ORANGE};
  }
  & mark {
    background-color: ${THEME.ORANGE};
    font-weight: 600;
    color: #151515;
  }
  & b {
    color: ${THEME.ORANGE};
  }
`;
export const NextBtnWrapper = styled.div<{
  isMobile: boolean;
  accepted: boolean;
}>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;

  & button {
    width: 45%;
    height: 4rem;
    color: ${THEME.ORANGE};
    border: 1px solid ${THEME.ORANGE};
    border-radius: 4px;
    transition: 0.5s;
  }
  & button:last-child {
    color: #151515;
    background-color: ${THEME.ORANGE};
  }
  & button:hover {
    color: ${THEME.ORANGE};
    background-color: ${THEME.LIGHT_ORANGE};
  }
  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: "column";
      & button {
        width: 100%;
        margin-bottom: 2rem;
      }
    `}
  ${(props) =>
    !props.accepted &&
    css`
      & button:last-child {
        background-color: ${THEME.BLACK};
        color: #592e19;
        border-color: #592e19;
      }
    `}
`;
export const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  /* justify-content: space-between; */
  color: ${THEME.LIGHT_GRAY};
  & label {
    margin-left: 6px;
    cursor: pointer;
  }
  & input {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
  & input:checked {
    accent-color: ${THEME.ORANGE};
  }
`;
