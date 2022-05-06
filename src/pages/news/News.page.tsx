import { FC, useEffect, useState, MouseEvent, ChangeEvent } from 'react';
import { Form } from '../../components';
import { Header } from '../../components';
import { INews } from '../../servis';
import { News } from '../../components';
import { useActions } from '../../customHooks/useAction';
import { useTypedSelector } from '../../customHooks/useTypedSelector';
import { v4 as uuidv4 } from 'uuid';
import { FormControlElement } from '../../components/Header/Header.props';

export const NewsPage: FC = () => {
	const [allNews, setAllNews] = useState<INews[]>([]);
	const [viewAllNews, setViewAllNews] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [oneNews, setOneNews] = useState<INews[]>([]);
	const [showForm, setShowForm] = useState<boolean>(false);

	const { news, error, loading } = useTypedSelector((state) => state.news);
	const { fetchNews } = useActions();

	console.log('news>>>>', news);

	const handleViewNews = () => {
		setViewAllNews(!viewAllNews);
	};

	const handleAscerding = () => {
		const copyNews = [...allNews];
		const sortUpNews = copyNews.sort(
			(a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt),
		);
		setAllNews(sortUpNews);
	};

	const handleDescending = () => {
		const copyNews = [...allNews];
		const sortUpNews = copyNews.sort(
			(a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
		);
		setAllNews(sortUpNews);
	};

	const handleChange = (e: ChangeEvent<FormControlElement>) => {
		setSearch(e.target.value);
	};

	const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!!news.length && !!search.length) {
			const copyNews = [...allNews];
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

	//const showNews = () => {
	//	getNews().then((data) => {
	//	setAllNews(data);
	//	setOneNews([data[0]]);
	//	});
	//};

	const handleComeBack = () => {
		setAllNews([]);
		setOneNews([]);
		setViewAllNews(false);
		//showNews();
	};

	const handleAddNews = (data: INews) => {
		const id = uuidv4();
		data['id'] = id;
		setOneNews([data, ...oneNews]);
	};

	const handleShow = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setShowForm(!showForm);
	};

	useEffect(() => {
		fetchNews();
	}, []);
	return (
		<div>
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
			{error ? 'Error' : null}
			{loading ? 'loading...' : null}
			<News info={!viewAllNews ? null : null} />
		</div>
	);
};
