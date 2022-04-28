import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
	data = new Date().getFullYear();
	render() {
		return (
			<>
				<footer className=' text-center _footer'>
					<div className='text-center _footer_item'>
						© {this.data} Copyright:
						<a
							className='text-white p-1'
							href='https://github.com/AliaksanderPush?tab=repositories'
						>
							{' '}
							My Repo
						</a>
					</div>
				</footer>
			</>
		);
	}
}
