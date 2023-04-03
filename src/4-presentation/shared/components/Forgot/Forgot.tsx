import { Link } from "react-router-dom";
import { ForgotStyled } from "./styled";

const Forgot = () => {
  return (
    <ForgotStyled>
      <Link to={"/1"}> Esqueceu a senha </Link>
    </ForgotStyled>
  );
};

export default Forgot;
