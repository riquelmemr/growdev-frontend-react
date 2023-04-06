import React from "react";

interface TextInputProps {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  name: string;
  showLabel?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  type,
  placeholder,
  label,
  name,
  showLabel,
}) => {
  return (
    // Se `ShowLabel` for true, mostra o label, caso contrário não mostra.
    <div>
      {showLabel && <label htmlFor={id}>{label}</label>}
      <input type={type} placeholder={placeholder} id={id} name={name} />
    </div>
  );
};

export default TextInput;
