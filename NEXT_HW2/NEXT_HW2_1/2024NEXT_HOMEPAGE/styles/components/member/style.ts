import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div<{ isMobile: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 10%;
  justify-content: center;
`;

export const MemberWrapper = styled.div`
  /* width: 375px; */
  width: 22rem;
  /* height: 516px; */
  height: 30rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: 0 1rem 5rem 1rem;
  /* margin-bottom: 5rem; */
`;

export const MemberImgBox = styled.div`
  /* width: 375px;
  height: 375px; */
  width: 22rem;
  height: 22rem;

  & img {
    width: 100%;
  }
`;

export const MemberTextBox = styled.div`
  /* width: 375px; */
  width: 22rem;
  /* height: 140px; */
  height: 8.2rem;
  /* padding: 30px 30px 25px; */
  padding: 1.5rem 1.5rem 1.5rem;
  box-sizing: border-box;
  background-color: ${THEME.GRAY_100};
`;

export const MemberName = styled.p`
  display: flex;
  align-items: center;
  font-weight: 800;
  /* font-size: 32px; */
  font-size: 1.7rem;
  /* line-height: 39px; */
  line-height: 2rem;
  margin-bottom: 0.6rem;
  color: ${THEME.BLACK_200};
`;

export const MemberInfo = styled.p`
  font-weight: 500;
  /* font-size: 28px; */
  font-size: 1.5rem;
  /* line-height: 34px; */
  line-height: 1.6rem;
  color: ${THEME.BLACK_100};
`;

export const ManagementTeamBadge = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: none;
  /* width: 91px;
  height: 34px; */
  width: 5rem;
  height: 2rem;
  font-weight: 800;
  background: #292929;
  /* border-radius: 10px; */
  border-radius: 0.9rem;
  /* font-size: 20px; */
  font-size: 1rem;
  /* line-height: 24px; */
  text-align: center;
  /* margin-left: 12px; */
  margin-left: 0.6rem;

  color: #f7941e;
`;
export const NormalBadge = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: none;
  /* width: 91px;
  height: 34px; */
  width: 5rem;
  height: 2rem;
  font-weight: 800;
  background: #292929;
  /* border-radius: 10px; */
  border-radius: 0.9rem;
  /* font-size: 20px; */
  font-size: 1rem;
  /* line-height: 24px; */
  text-align: center;
  /* margin-left: 12px; */
  margin-left: 0.6rem;

  color: #f7941e;
`;
