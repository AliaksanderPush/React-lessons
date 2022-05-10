import { FC, useEffect, useState } from 'react';
import { Form } from '../../components';
import { INews } from '../../servis';
import { News } from '../../components';
import { Menu } from '../../components';
import { useActions } from '../../customHooks/useAction';
import { useTypedSelector } from '../../customHooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import { fetchNews } from '../../redux/acshions/acshions.news';
import { useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import styles from './NewsPage.module.css';

export const NewsPage: FC = () => {
	const [viewAllNews, setViewAllNews] = useState<boolean>(false);
	const [showForm, setShowForm] = useState<boolean>(false);

	const { news, error, loading } = useTypedSelector((state) => state.news);
	const { sortNewsByData, addNews } = useActions();
	const dispatch = useDispatch();
	const oneNews = news.slice(0, 1);

	const handleViewNews = () => {
		setViewAllNews(!viewAllNews);
	};

	const handleFilterByData = (value: string | null) => {
		if (value === '#/action-1') {
			sortNewsByData(true);
		} else {
			sortNewsByData(false);
		}
	};

	const handleAddNews = (data: INews) => {
		const id = uuidv4();
		data['id'] = id;
		addNews(data);
	};

	const handleShow = () => {
		setShowForm(!showForm);
	};

	const handleReset = () => {
		setViewAllNews(false);
		dispatch(fetchNews());
	};

	useEffect(() => {
		dispatch(fetchNews());
	}, [dispatch]);
	return (
		<div>
			<Menu
				viewAllNews={viewAllNews}
				handleViewNews={handleViewNews}
				handleFilterByData={handleFilterByData}
				handleShow={handleShow}
				handleReset={handleReset}
				showForm={showForm}
			/>
			{showForm ? <Form handleAddNews={handleAddNews} /> : null}
			{error ? (
				<h1 className="text-center text-danger">
					Somesing went wrong(((
				</h1>
			) : null}
			{loading ? (
				<div className={styles.spinner}>
					<Spinner animation="border" />
				</div>
			) : null}
			<News info={viewAllNews ? news : oneNews} />
		</div>
	);
};
