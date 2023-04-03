import Button from "../../shared/components/Button/Button";
import FormContainer from "../../shared/components/FormContainer/FormContainer";
import PageContainer from "../../shared/components/PageContainer/PageContainer";
import icone from "../../../../src/assets/icone.svg";

const ChangeCompletedPresentation = () => {
  return (
    <PageContainer>
      <FormContainer
        title={"Alteração concluída!"}
        description={"Entre com sua nova senha para começar a usar a Zembeer"}
        icone={icone}
      >
        <Button value={"Ok"} type={"submit"}></Button>
      </FormContainer>
    </PageContainer>
  );
};

export default ChangeCompletedPresentation;
