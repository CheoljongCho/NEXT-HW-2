import { ItemProps } from "./../../../node_modules/rc-overflow/es/Item.d";
import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container2 = styled.div<{ isMobile: boolean }>`
  position: relative;
  width: 100%;
  max-width: 150rem; // 이 부분을 추가
  min-height: 100vh;

  margin: 0 auto;
  padding: 3rem 0%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const CardDiv = styled.div`
  width: 40rem;
  height: auto;

  margin: 0 1rem 5rem 1rem;

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  /* margin-bottom: 5rem; */
  background-color: #f2f2f2;
  padding: 2rem 5rem;
  border-radius: 30px;
  /* @media screen and (max-width: 500px) {
    width: 50rem;
  } */
`;

export const CardTopDiv = styled.div`
  /* width: 700px; */
  width: 41.1764 rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const GenerationDiv = styled.div`
  width: 70px;
  height: 30px;

  gap: 10px;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background: #f7941e;

  color: #fff;
  font-family: Inter;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;

export const LinkToUrl = styled.a`
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
export const OccupationDiv = styled.div`
  width: 70px;
  height: 30px;

  margin: 0px 7px;
  gap: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  border-radius: 5px;
  border: 2px solid #f7941e;
  background: #fff;

  color: #f7941e;
  text-align: center;

  font-family: Inter;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LogoImgDiv = styled.div`
  width: 84px;
  height: 43px;
  & img {
    width: 100%;
  }
`;

export const ThumbnailImgDiv = styled.div`
  width: 300px;
  height: 170px;
  & img {
    width: 100%;
    cursor: pointer;
  }
  padding: 10px;
`;

export const CommentDiv = styled.div`
  color: #000;
  width: 300px;
  font-family: Inter;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1rem;
`;
