import { useState } from "react";
import { InputLabelStyled } from "./styled";

interface IInputProps {
  label: string;
  type: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder: string;
  icon?: string;
  alt?: string;
}

const InputLabel = ({ label, type, placeholder, icon, alt }: IInputProps) => {
  const [input, setInput] = useState("");

  

  return (
    <InputLabelStyled>
      <label>{label}</label>
      <div className="inputs">
        <input
          type={type}
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img src={icon} alt="" width={23}/>
      </div>
    </InputLabelStyled>
  );
};

export default InputLabel;
