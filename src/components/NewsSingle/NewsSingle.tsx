import { useEffect, useState } from 'react';
import { formatDateTime } from '../../helpers/helper';
import { INewsSingle } from './NewsSingle.props';
import Button from 'react-bootstrap/Button';
import './NewsSingle.css';

export const NewsSingle = ({ index, item }: INewsSingle): JSX.Element => {
	const { publishedAt, urlToImage, title, content, description } = item;
	const data = formatDateTime(publishedAt);
	const [show, setShow] = useState<boolean>(false);

	const hanledWatch = () => {
		setShow(!show);
	};

	useEffect(() => {
		if (index === 0) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, [index]);

	return (
		<div className='cards_container'>
			<div className='cards_date'>{data}</div>
			<div className='cards_image'>
				<img src={urlToImage} alt={title} />
			</div>
			<div className='cards_title'>
				<div className='cards_title_main'>{title}</div>
				<div className='cards_btn'>
					<Button onClick={hanledWatch} variant='primary' size='sm'>
						More&gt;&gt;&gt;{' '}
					</Button>
				</div>
			</div>

			{show ? (
				<div className='cards_details'>
					<div className='cards_content'>{content}</div>
					<div className='cards_descriptions'>{description}</div>
				</div>
			) : null}
		</div>
	);
};
