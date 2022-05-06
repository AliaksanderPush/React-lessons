import { FC, useEffect, useState, MouseEvent } from 'react';
import { Form, Header } from './components';
import { INews } from './servis';
import { getNews } from './servis';
import { News } from './components/News/News';
import { Footer } from './components';
import { ChangeEvent } from 'react';
import { FormControlElement } from './components/Header/Header.props';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
	const [news, setNews] = useState<INews[]>([]);
	const [viewAllNews, setViewAllNews] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [oneNews, setOneNews] = useState<INews[]>([]);
	const [showForm, setShowForm] = useState<boolean>(false);

	const handleViewNews = () => {
		setViewAllNews(!viewAllNews);
	};

	const handleAscerding = () => {
		const copyNews = [...news];
		const sortUpNews = copyNews.sort(
			(a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt),
		);
		setNews(sortUpNews);
	};

	const handleDescending = () => {
		const copyNews = [...news];
		const sortUpNews = copyNews.sort(
			(a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
		);
		setNews(sortUpNews);
	};

	const handleChange = (e: ChangeEvent<FormControlElement>) => {
		setSearch(e.target.value);
	};

	const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!!news.length && !!search.length) {
			const copyNews = [...news];
			const searchNews = copyNews.filter((row) => searchByTitle(row.title));
			setOneNews(searchNews);
		}
		if (viewAllNews) {
			setViewAllNews(!viewAllNews);
		}
	};

	const searchByTitle = (row: INews['title']): boolean => {
		const titleArr = row.split(' ');
		const searchWords = search;
		const serchWordArr = searchWords.split(' ');
		return titleArr.some((item) => serchWordArr.includes(item));
	};

	const showNews = () => {
		getNews().then((data) => {
			setNews(data);
			setOneNews([data[0]]);
		});
	};

	const handleComeBack = () => {
		setNews([]);
		setOneNews([]);
		setViewAllNews(false);
		showNews();
	};

	const handleAddNews = (data: INews) => {
		const id = uuidv4();
		data['id'] = id;
		setOneNews([data, ...oneNews]);
		console.log('add>>', data);
	};

	const handleShow = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setShowForm(!showForm);
	};

	useEffect(() => {
		showNews();
	}, []);
	return (
		<div className='content_all'>
			<Header
				handleShow={handleShow}
				handleAscerding={handleAscerding}
				handleViewNews={handleViewNews}
				handleDescending={handleDescending}
				viewNews={viewAllNews}
				handleChange={handleChange}
				handleSearch={handleSearch}
				handleComeBack={handleComeBack}
			/>
			{showForm ? <Form handleAddNews={handleAddNews} /> : null}
			<News info={!viewAllNews ? oneNews : news} />
			<Footer />
		</div>
	);
};

export default App;
