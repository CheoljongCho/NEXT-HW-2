import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";
import { motion } from "framer-motion";
import { fadeIn } from "styles/activities/style";
export const NavBarContainer = styled.div<{
  scroll: boolean;
  pathname: string;
}>`
  padding: 34px 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  /* max-width: 1920px; */
  z-index: 10;
  position: fixed;
  box-sizing: border-box;
  background-color: transparent;
  transition: 1s;
  ${(props) =>
    props.scroll &&
    props.pathname === "/home" &&
    css`
      background-color: rgba(0, 0, 0, 0.85);
    `}
  ${(props) =>
    props.scroll &&
    props.pathname !== "/home" &&
    css`
      background-color: rgba(255, 255, 255, 0.85);
    `}
`;

export const NavBarLogo = styled.img`
  cursor: pointer;
  width: 10rem;
`;

export const NavLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledNav = styled.nav<{
  isWhite: boolean;
  selected: boolean;
  key: any;
}>`
  text-decoration: none;
  color: ${({ isWhite }) => (isWhite ? THEME.WHITE : THEME.BLACK)};
  font-size: 1.6rem;
  padding: 10px;
  transition: all 0.3s;
  ${(props) =>
    props.selected &&
    css`
      margin-bottom: -2px;
      border-bottom: 2px solid ${THEME.ORANGE};
      color: ${THEME.ORANGE};
    `}
  cursor: pointer;
  &:hover {
    color: ${THEME.ORANGE};
  }

  & + & {
    margin-left: 5%;
  }
`;
// 모바일
export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10000;
  .ant-menu-dark {
    background-color: black;
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background-color: ${THEME.ORANGE};
  }

  .ant-menu-root {
    height: calc(100vh - 6rem);
    z-index: 10000;
  }
`;

export const Header = styled.div`
  background-color: black;
  height: 6rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1000000;
`;

export const HeaderWhiteSpace = styled.div`
  z-index: -1;
  height: 6rem;
`;

const slideOut = keyframes`
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform: translateX(0);
  }
`;

const slideIn = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-100%);
  }
`;

export const MenuContainer = styled(motion.div)<{ isOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: fixed;
  z-index: 80;
`;
export const MenuWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
`;
export const Menu = styled.div<{ selected: boolean }>`
  width: 100%;
  color: white;
  font-size: 2rem;
  padding: 1.6rem 4rem;
  transition: 0.5s;
  /* border-radius: 8px; */
  ${(props) =>
    props.selected &&
    css`
      background-color: ${THEME.ORANGE};
    `}
  &:hover {
    color: black;
    background-color: ${THEME.LIGHT_GRAY};
  }
`;
export const SubMenuContainer = styled.div<{ subMenu: any }>`
  width: 100%;
`;
export const SubMenu = styled.div`
  color: white;
  padding: 1.2rem 4rem;
  background-color: #151515;
`;
export const NoticeContainer = styled.section`
  color: white;
  position: absolute;
  left: 10%;
  bottom: 8rem;
`;
export const HamburgerContainer = styled.div<{
  click: boolean;
  isWhite: boolean;
}>`
  position: relative;
  width: 3rem;
  cursor: pointer;
  z-index: 3;
  &:after {
    content: "";
    display: block;
    padding-bottom: 80%;
  }
  & span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    border-radius: 4px;
    transition: all 0.4s;
    /* ${(props) =>
      props.isWhite &&
      css`
        background-color: white;
      `} */
  }
  & span:nth-of-type(1) {
    top: 0;
    ${(props) =>
      props.click &&
      css`
        webkit-transform: translateY(1.1rem) rotate(-315deg);
        transform: translateY(1.1rem) rotate(-315deg);
      `}
  }

  & span:nth-of-type(2) {
    top: 1.1rem;
    ${(props) =>
      props.click &&
      css`
        opacity: 0;
      `}
  }

  & span:nth-of-type(3) {
    bottom: 0;
    ${(props) =>
      props.click &&
      css`
        -webkit-transform: translateY(-1.1rem) rotate(315deg);
        transform: translateY(-1.1rem) rotate(315deg);
      `}
  }
`;
