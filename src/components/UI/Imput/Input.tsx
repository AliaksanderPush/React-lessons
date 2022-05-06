import { IInputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ appearance, type, className, ...props }: IInputProps): JSX.Element => {
	return (
		<input
			type={type}
			className={cn(styles.input, className, {
				[styles.primary]: appearance === 'primary',
			})}
			{...props}
		/>
	);
};
