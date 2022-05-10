import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({
	appearance,
	size,
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
				[styles.primary_ghost]: appearance === 'prim-gh',
				[styles.size_s]: size === 's',
				[styles.size_sm]: size === 'sm',
				[styles.size_m]: size === 'm',
			})}
			{...props}
		>
			{children}
		</button>
	);
};
