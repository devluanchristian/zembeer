import { ButtonStyled } from "./styled";

interface IButton {
  value: string;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({ value, type }: IButton) => {
  return <ButtonStyled type={type}>{value}</ButtonStyled>;
};

export default Button;
