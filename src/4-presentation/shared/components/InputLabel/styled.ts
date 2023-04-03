import styled from "styled-components";
import theme from "../../../../themes/styles";

export const InputLabelStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;


  label {
    font-size: ${theme.text.fontSize};
    font-weight: ${theme.text.fontWeight};
    font-family: ${theme.fontFamily.primary};
    padding: 5px;
  }
  input {
    width: 304px;
    height: 22px;
    box-sizing: border-box;
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.text.fontSize};
    background-color: transparent;
    border: none;
    outline: none;
    
   
  }

  input::placeholder {
    color: #e8edf2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .inputs {
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #e8edf2;
  }
  img {
    cursor: pointer;
    padding: 3px;
  }
`;
