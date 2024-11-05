import styled from "@emotion/styled";

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <ButtonBox type="button" onClick={onClick} {...rest}>
      {children}
    </ButtonBox>
  );
};

const ButtonBox = styled.button`
  font-family: "Pretendard Variable", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  width: 110px;

  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  gap: 6px;
  border-radius: 6px;
  padding: 10px;

  cursor: pointer;

  color: #737373;
  border: 1px solid #d6d6d6;
  background-color: white;

  &:hover,
  &:active {
    color: #4a4a4a;
    background-color: #f4f4f4;
  }

  &disabled {
    color: #b8b8b8;
    border: 1px solid #ebebeb;
    background-color: #f4f4f4;
  }
`;
