import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
30% {
  transform: rotate(0deg);
}
50% { 
  transform: rotate(45deg);
}
80% { 
  transform: rotate(45deg);
}
100% {
  transform: rotate(90deg);
}
`;
const blink = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #151515;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.div`
  margin-top: 3rem;
  font-size: 1.8rem;
  color: white;
  text-align: center;
  font-weight: 600;
  animation: ${blink} 0.5s infinite alternate;
`;
export const SpinnerWrapper = styled.div`
  width: 10rem;
  animation: ${spin} 1s infinite;
  & img {
    width: 100%;
    height: 100%;
  }
`;
