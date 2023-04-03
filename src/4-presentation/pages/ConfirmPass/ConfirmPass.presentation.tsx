import Button from "../../shared/components/Button/Button";
import FormContainer from "../../shared/components/FormContainer/FormContainer";
import InputContainer from "../../shared/components/InputContainer/InputContainer";
import InputLabel from "../../shared/components/InputLabel/InputLabel";
import PageContainer from "../../shared/components/PageContainer/PageContainer";
import eye from "../../../assets/eye.png";
import icone from "../../../../src/assets/icone.svg";

const ConfirmAccess = () => {
  return (
    <PageContainer>
      <FormContainer
        title={"Modifique sua senha"}
        description={
          "Voce precisa inserir sua senha para primeiro acesso ao CRM"
        }
        icone={icone}
      >
        <InputContainer>
          <InputLabel
            label={"Senha"}
            type={"password"}
            placeholder={"*******"}
            value={""}
          />
          <InputLabel
            label={"Confirme sua senha"}
            type={"password"}
            placeholder={"*******"}
            value={""}
            icon={eye}
            alt={"Ocultar senha"}
          />
          <Button value={"Confirmar"} type={"submit"}></Button>
        </InputContainer>
      </FormContainer>
    </PageContainer>
  );
};

export default ConfirmAccess;
