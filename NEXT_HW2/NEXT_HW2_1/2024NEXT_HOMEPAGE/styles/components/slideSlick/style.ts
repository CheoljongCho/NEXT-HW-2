import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  margin: 0 auto;
`;
export const ElementWrapper = styled.div`
  width: 60%;
  padding: 2rem;
  background-color: transparent !important;

  @media screen and (max-width: 500px) {
    padding: 0rem;
    padding-top: 1rem;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  &:after {
    content: "";
    padding-bottom: 56%;
    display: block;
    /* background-color: green; */
  }
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ElementInfo = styled.div`
  font-size: 1.6rem;
  margin-top: 2rem;
  & p {
    margin: 0;
    margin-top: 0.5rem;
  }
`;
