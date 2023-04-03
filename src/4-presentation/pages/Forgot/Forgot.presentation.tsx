import Button from "../../shared/components/Button/Button";
import FormContainer from "../../shared/components/FormContainer/FormContainer";
import InputContainer from "../../shared/components/InputContainer/InputContainer";
import InputLabel from "../../shared/components/InputLabel/InputLabel";
import PageContainer from "../../shared/components/PageContainer/PageContainer";
import sms from "../../../assets/sms.png";
import AlreadyAccount from "../../shared/components/AlreadyAccount/AlreadyAccount";
import paper from "../../../../src/assets/paper.png";

const ForgotPresentation = () => {
  return (
    <PageContainer>
      <FormContainer
        title={"Esqueceu sua senha?"}
        description={
          "Digite seu endereço de e-mail e enviaremos um e-mail com instruções para redefinir sua senha."
        }
        icone={paper}
      >
        <InputContainer>
          <InputLabel
            label={"Email"}
            type={"Email"}
            placeholder={"Email"}
            value={""}
            icon={sms}
            alt={"Email"}
          />
          <Button value={"Enviar"} type={"submit"}></Button>
          <AlreadyAccount />
        </InputContainer>
      </FormContainer>
    </PageContainer>
  );
};

export default ForgotPresentation;
