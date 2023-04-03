import styled from "styled-components";
import theme from "../../../../themes/styles";

export const AlreadyAccountStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.description.fontSize};
  font-weight: ${theme.description.fontWeight};
  line-height: ${theme.description.lineHeight};
  color: ${theme.color.accent[1]};
  cursor: pointer;

  a {
    padding: 3px;
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.description.fontSize};
    font-weight: ${theme.textBold};
    line-height: ${theme.textBold.lineHeight};
    color: ${theme.color.primary};
  }
  a:hover {
    transition: all ease-in-out 0.4s;
    filter: brightness(50%);
  }
`;
