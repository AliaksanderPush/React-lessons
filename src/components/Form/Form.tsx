import { useState, FormEvent } from 'react';
import { Row, Col } from 'react-bootstrap';
import { INews } from '../../servis';
import { IForm } from './form.props';
import { Input } from '..';
import { getDateTime } from '../../helpers/helper';
import { Button } from '..';

export const Form = ({ handleAddNews }: IForm): JSX.Element => {
	const [data, setData] = useState<INews>({
		publishedAt: getDateTime(),
		content: '',
		description: '',
		urlToImage:
			'https://ichef.bbci.co.uk/news/1024/branded_news/5BFE/production/_124405532_kara.png',
		title: '',
	});

	const handleInputChange = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.currentTarget;
		setData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleAddNews(data);
		setData({
			publishedAt: '',
			content: '',
			description: '',
			urlToImage: '',
			title: '',
		});
	};

	return (
		<>
			<h1 className='text-center mt-3'>Add news</h1>
			<Row className='justify-content-center mt-3'>
				<Col xs={6} mt={4} md='auto' className='_midle_col'>
					<form className='mb-3' onSubmit={(e) => handleSubmit(e)}>
						<Row className='justify-content-center mt-2'>
							<Col>
								<p className=' mb-0'>Title:</p>
								<Input
									type='text'
									name='title'
									value={data.title}
									onChange={handleInputChange}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mt-2'>
							<Col>
								<p className=' mb-0'>Content:</p>
								<Input
									appearance={'primary'}
									type='text'
									name='content'
									value={data.content}
									onChange={handleInputChange}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mt-2'>
							<Col>
								<p className=' mb-0'>urlToImage:</p>
								<Input
									appearance={'primary'}
									type='text'
									name='urlToImage'
									value={data.urlToImage}
									onChange={handleInputChange}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center mt-2'>
							<Col xs={6} md='auto'>
								<p className='mb-0'>Description:</p>
								<textarea
									style={{ width: '400px', height: '200px' }}
									name='description'
									value={data.description}
									onChange={handleInputChange}
								/>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col sx={6} mt={3} mb={2} md='auto'>
								<Button appearance='primary' size='m'>
									Add News
								</Button>
							</Col>
						</Row>
					</form>
				</Col>
			</Row>
		</>
	);
};
