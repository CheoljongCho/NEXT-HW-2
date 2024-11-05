import styled, { css, keyframes } from "styled-components";
import { THEME } from "styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
`;
export const FileInputBtn = styled.label`
  /* width: 30%; */
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${THEME.ORANGE};
  color: ${THEME.ORANGE};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 2rem;
  transition: 0.5s;
  &:hover {
    background-color: ${THEME.LIGHT_ORANGE};
  }
`;
export const SubmitBtn = styled.button`
  /* width: 30%; */
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${THEME.ORANGE};
  color: ${THEME.ORANGE};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 2rem;
  transition: 0.5s;
  &:hover {
    background-color: ${THEME.LIGHT_ORANGE};
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & label {
    margin-bottom: 1rem;
  }
  & input {
    margin-bottom: 1rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    font-size: 1.8rem;
    padding: 8px;
  }
`;
