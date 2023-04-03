import styled from "styled-components";
import theme from "../../../../themes/styles";

export const FormContainerStyled = styled.form`
  height: 554px;
  width: 440px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.color.accent[3]};
  box-sizing: border-box;

 

  .container-header {
    height: 40%;
    font-family: ${theme.fontFamily.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    
   
  }
  .container-header img {
    width: 70px;
    height: 70px;
  }
  .container-header h5 {
    font-size: ${theme.heading5.fontSize};
    line-height: ${theme.heading5.lineHeight};
    font-weight: ${theme.heading5.fontWeight};
  }
  .container-header p {
    font-size: ${theme.text.fontSize};
    font-weight: ${theme.text.fontWeight};
    line-height: ${theme.text.lineHeight};
    color: ${theme.color.accent[1]};
    text-align: center;
    padding: 5px;
    max-width: 260px;
    box-sizing: border-box;
  }
`;
