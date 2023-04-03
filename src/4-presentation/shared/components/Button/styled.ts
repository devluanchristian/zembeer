import styled from "styled-components";
import theme from "../../../../themes/styles";

export const ButtonStyled = styled.button`
  background-color: ${theme.color.primary};
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.button_label.fontSize};
  font-weight: ${theme.button_label.fontWeight};
  line-height: ${theme.button_label.lineHeight};
  border: none;
  border-radius: 8px;
  padding: 14px 49px;
  box-sizing: border-box;
  width: 350px;
  color: ${theme.color.accent[3]};
  cursor: pointer;
  display: flex;
  justify-content: center;


  &:hover {
    filter: brightness(80%);
    transition: all ease-in-out 0.3s;
  }
`;
