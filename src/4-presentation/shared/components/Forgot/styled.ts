import styled from "styled-components";
import theme from "../../../../themes/styles";

export const ForgotStyled = styled.nav`
  a {
    display: flex;
    justify-content: end;
    align-items: center;
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.description.fontSize};
    font-weight: ${theme.description.fontWeight};
    line-height: ${theme.description.lineHeight};
    color: ${theme.color.accent[1]};
    cursor: pointer;
  }

  a:hover {
    color: ${theme.color.accent[0]};
    transition: all ease-in 0.3s;
  }
`;
