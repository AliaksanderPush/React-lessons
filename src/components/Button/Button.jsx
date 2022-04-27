import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance, children, className, handleClick, ...props }) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.blueviolet]: appearance === 'blueviolet',
				[styles.red]: appearance === 'red',
				[styles.green]: appearance === 'green',
				[styles.brown]: appearance === 'brown',
			})}
			{...props}
			onClick={() => handleClick(appearance)}
		>
			{children}
		</button>
	);
};
