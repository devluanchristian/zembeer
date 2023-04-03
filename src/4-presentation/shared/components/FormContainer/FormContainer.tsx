import { FormContainerStyled } from "./styled";


interface IFormContainer {
  children: React.ReactNode;
  title: string;
  description: string;
  icone: string;
}

const FormContainer = ({ children, title, description, icone }: IFormContainer) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };
  return (
    <FormContainerStyled onSubmit={handleSubmit}>
      <div className="container-header">
        <img src={icone} alt="icone de bebida" />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <>
        <div>{children}</div>
      </>
    </FormContainerStyled>
  );
};

export default FormContainer;
