import React, { PureComponent } from 'react';
import { Button } from './components/Button/Button';
import styles from './App.module.css';

export default class App extends PureComponent {
	state = {
		colors: [],
		btn: ['primary', 'red', 'green', 'brown', 'blueviolet'],
	};

	handleClick = (param) => {
		if (this.state.colors.length > 2) {
			const col = [...this.state.colors];
			let newColors = col.slice(1);
			this.setState(() => {
				const newColor = [...newColors, param];
				return { colors: newColor };
			});
		} else {
			this.setState(({ colors }) => {
				const newColor = [...colors, param];
				return { colors: newColor };
			});
		}
	};

	render() {
		return (
			<div className={styles.container}>
				{this.state.btn.map((button) => {
					return (
						<Button key={button} handleClick={this.handleClick} appearance={button}>
							{button}
						</Button>
					);
				})}
				<div>
					{this.state.colors.map((item, index) => {
						return (
							<p key={index}>
								{item}:{index + 1}
							</p>
						);
					})}
				</div>
			</div>
		);
	}
}
