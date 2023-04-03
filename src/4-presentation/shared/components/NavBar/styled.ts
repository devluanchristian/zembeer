import styled from "styled-components";
import theme from "../../../../themes/styles";

export const NavBarStyled = styled.div`
  position: absolute;
  width: 100vw;
  height: 90px;
  left: 0;
  top: 0;

  .container-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.color.accent[3]};
  }
  .container-nav-logo {
    display: flex;
    align-items: center;
    width: 240px;
    height: 90px;
    padding-left: 8px;
    box-sizing: border-box;
    border: 0.941365px solid #e8edf2;
  }
  .container-nav-logo img {
    width: 52px;
    height: 50px;
    cursor: pointer;
  }
  .container-nav-logo ul {
    display: flex;
    align-items: center;
    justify-content: start;
    list-style: none;
  }
  .container-nav-logo h6 {
    font-size: ${theme.heading6.fontSize};
    font-family: ${theme.fontFamily.primary};
    font-weight: ${theme.heading6.fontWeight};
    line-height: ${theme.heading6.lineHeight};
    color: ${theme.color.accent[1]};
  }
  .container-nav-perfil {
    padding-right: 40px;
  }
  .container-nav-perfil ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
  .container-nav-perfil img {
    max-width: 48px;
    cursor: pointer;
  }
  .container-button {
    position: absolute;
    left: 223px;
  }
  .button-arrowLeft {
    background: #ffffff;
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 10px;
    border: 1px solid #e8edf2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .button-arrowLeft img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;
