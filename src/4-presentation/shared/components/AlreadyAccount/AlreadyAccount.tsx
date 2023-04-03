import { Link } from "react-router-dom";
import { AlreadyAccountStyled } from "./styled";

const AlreadyAccount = () => {
  return (
    <AlreadyAccountStyled>
      Já possui conta? <Link to={"/"}> Entre agora</Link>{" "}
    </AlreadyAccountStyled>
  );
};

export default AlreadyAccount;
