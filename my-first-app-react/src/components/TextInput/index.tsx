import React from "react";

interface TextInputProps {
  type: string;
  placeholder: string;
  label: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ type, placeholder, label, className }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  )
}

export default TextInput;