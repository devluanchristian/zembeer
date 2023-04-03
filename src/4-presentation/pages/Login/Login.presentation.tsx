import Button from "../../shared/components/Button/Button";
import Forgot from "../../shared/components/Forgot/Forgot";
import FormContainer from "../../shared/components/FormContainer/FormContainer";
import InputContainer from "../../shared/components/InputContainer/InputContainer";
import InputLabel from "../../shared/components/InputLabel/InputLabel";
import PageContainer from "../../shared/components/PageContainer/PageContainer";
import sms from "../../../assets/sms.png";
import eye from "../../../assets/eye.png";
import icone from "../../../../src/assets/icone.svg";

const Login = () => {
  return (
    <PageContainer>
      <FormContainer
        title={"Seja Bem Vindo"}
        description={"Acesse agora sua conta"}
        icone={icone}
      >
        <InputContainer>
          <InputLabel
            label={"E-mail"}
            type={"text"}
            placeholder={"Email"}
            value={""}
            icon={sms}
            alt={"Email"}
          />
          <InputLabel
            label={"Senha"}
            type={"password"}
            placeholder={"Password"}
            value={""}
            icon={eye}
            alt={"Ocultar senha"}
          />
          <Button value={"Acessar"} type={"submit"}></Button>
          <Forgot />
        </InputContainer>
      </FormContainer>
    </PageContainer>
  );
};

export default Login;
