import React from 'react';
import CustomInput from './styles';

interface InputProps {
	name: string;
	placeholder: string;
	type: string;
	label?: string;
	showLabel?: boolean;
	id: string;
	value: string;
	handleChange: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({
	label,
	name,
	placeholder,
	type,
	id,
	showLabel,
	value,
	handleChange,
}) => {
	return (
		<>
			{showLabel && <label htmlFor={id}>{label}</label>}
			<CustomInput
				type={type}
				placeholder={placeholder}
				id={id}
				name={name}
				value={value}
				onChange={(ev) => handleChange(ev.target.value)}
			/>
		</>
	);
};

export default Input;
