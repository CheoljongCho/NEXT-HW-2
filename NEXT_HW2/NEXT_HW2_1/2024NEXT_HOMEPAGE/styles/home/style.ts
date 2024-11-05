import styled, { css, keyframes } from 'styled-components';
import { THEME } from 'styles/theme';
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

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    background-color: #000;
`;

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100vh - 112px);
    margin-top: 112px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
export const MainContainerBG = styled.img<{ isMobile: boolean }>`
    width: 100%;
    height: 100%;
    opacity: 0.3;
    object-fit: cover;
    filter: grayscale(1);
    animation: ${color} 3s 0.5s forwards;

    ${(props) =>
        props.isMobile &&
        css`
            object-fit: contain;
        `}
`;
export const MainContainerLogo = styled.div`
    width: 56%;
    & img {
        width: 100%;
    }
`;
export const MainWrapper = styled.div<{ isMobile: boolean }>`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => (props.isMobile ? '80%' : '60%')};
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: ${fadeIn} 2s 1s forwards;
`;
export const MainTextWrapper = styled.div`
    width: 100%;
    margin-top: 3rem;
    & img {
        width: 100%;
    }
`;
export const Section1 = styled.div<{ isMobile: boolean }>`
    width: 100%;
    padding: 20rem 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow-x: hidden;
    & div {
        width: 45%;
        color: white;
    }

    & div:last-child p {
        font-size: 2.2rem;
        margin-top: 1rem;
        line-height: 150%;
    }
    & div:last-child p:first-child {
        font-size: 3.6rem;
        font-weight: 700;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    & div:last-child p b {
        color: ${THEME.ORANGE};
        /* font-weight: 700; */
    }
    ${(props) =>
        props.isMobile &&
        css`
            padding: 10rem 8%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            & div {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
            & div:last-child p {
                font-size: 1.8rem;
            }
            & div:last-child p:first-child {
                font-size: 3.2rem;
            }
        `}
`;
export const Section2 = styled.div`
    width: 100%;
    background-color: ${THEME.LIGHT_BLACK};
    padding: 10rem 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
`;
export const TextWrapper = styled.div<{ isMobile: boolean }>`
    width: 100%;
    font-size: 2.4rem;
    word-break: keep-all;
    color: #fff;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    & p {
        line-height: 150%;
    }
    & img {
        width: 47%;
        margin-top: 4rem;
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
            font-size: 1.8rem;
            & img {
                width: 100%;
            }
            & p {
                width: 100%;
            }
        `}
`;
export const LottieContainer = styled.div<{ isMobile: boolean }>`
    width: 125%;
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
        `}
`;
export const ArrowBG = styled.div<{ isMobile: boolean }>`
    width: 100%;
    height: 140%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5));
    position: absolute;
    left: 0;
    top: 0;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);
    ${(props) =>
        props.isMobile &&
        css`
            height: 110%;
        `}
`;

export const LottieWrapper = styled.div<{ isMobile: boolean }>`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h2 {
        font-weight: 700;
    }
    & p {
        font-size: 1.8rem;
        line-height: 150%;
        margin: 1rem;
    }
    ${(props) =>
        props.isMobile &&
        css`
            width: 80%;
            margin-bottom: 6rem;
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
    color: ${THEME.WHITE};
    transition: 0.5s;
    ${(props) =>
        !props.isMobile &&
        css`
            &:hover {
                /* background-color: ${THEME.LIGHT_ORANGE}; */
                border-bottom: 1px solid ${THEME.WHITE};
            }
        `}
`;

export const PartnerContainer = styled.div<{ isMobile: boolean }>`
    width: 100%;
    padding: 5rem;
    background: white;
    border-radius: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    & div {
        width: 20%;
        margin: 2rem;
    }
    & div img {
        width: 100%;
    }
    ${(props) =>
        props.isMobile &&
        css`
            padding: 2rem;
            & div {
                width: 40%;
                margin: 1rem;
            }
        `}
`;
