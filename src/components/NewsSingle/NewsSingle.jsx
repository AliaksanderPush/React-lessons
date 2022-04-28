import React, { PureComponent } from 'react';
import { formatDateTime } from '../../helpers/helper';
import Button from 'react-bootstrap/Button';
import './NewsSingle.css';

export default class NewsSingle extends PureComponent {
	state = {
		show: false,
	};

	hanledWatch = () => {
		this.setState({ show: !this.state.show });
	};

	showNewsDetails = () => {
		if (this.props.index === 0) {
			this.setState({ show: true });
		} else {
			this.setState({ show: false });
		}
	};

	componentDidUpdate(prevProps) {
		if (prevProps.index !== this.props.index) {
			this.showNewsDetails();
		}
	}

	componentDidMount() {
		this.showNewsDetails();
	}

	render() {
		const { publishedAt, urlToImage, title, content, description } = this.props.item;
		const data = formatDateTime(publishedAt);

		return (
			<div className='cards_container'>
				<div className='cards_date'>{data}</div>
				<div className='cards_image'>
					<img src={urlToImage} alt={title} />
				</div>
				<div className='cards_title'>
					<div className='cards_title_main'>{title}</div>
					<div className='cards_btn'>
						<Button onClick={this.hanledWatch} variant='primary' size='sm'>
							More&gt;&gt;&gt;{' '}
						</Button>
					</div>
				</div>

				{this.state.show ? (
					<div className='cards_details'>
						<div className='cards_content'>{content}</div>
						<div className='cards_descriptions'>{description}</div>
					</div>
				) : null}
			</div>
		);
	}
}
