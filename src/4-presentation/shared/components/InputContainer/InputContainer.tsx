import { IProps } from "../PageContainer/PageContainer";
import { InputContainerStyled } from "./styled";


const InputContainer = ({children}:IProps) => {
  return (
    <InputContainerStyled>
      {children}
    </InputContainerStyled>
  );
};

export default InputContainer;
