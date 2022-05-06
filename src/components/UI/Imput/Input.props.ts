import { InputHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IInputProps
	extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	type: 'text' | 'number';
	appearance?: 'primary';
}
