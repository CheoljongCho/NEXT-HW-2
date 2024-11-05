import styled from "@emotion/styled";

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  justify-content: ${({ content }) => content || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  gap: ${({ gap }) => gap || 0}px;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;
