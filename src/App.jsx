import React, { PureComponent } from 'react';
import Header from './components/Header';
import Api from './servise/Api';
import News from './components/News';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends PureComponent {
	api = new Api();
	state = {
		loading: false,
		news: null,
		oneNews: null,
		viewAllNews: false,
		search: '',
	};

	handleAscerding = () => {
		const news = [...this.state.news];
		this.setState(() => {
			const sortUpNews = news.sort(
				(a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt),
			);
			return { news: sortUpNews };
		});
	};

	handleDescending = () => {
		const news = [...this.state.news];
		this.setState(() => {
			const sortUpNews = news.sort(
				(a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
			);
			return { news: sortUpNews };
		});
	};

	handleViewNews = () => {
		this.setState({ viewAllNews: !this.state.viewAllNews });
	};

	handleChange = (e) => {
		this.setState({ search: e.target.value });
	};

	handleSearch = (e) => {
		e.preventDefault();
		if (!!this.state.news.length && !!this.state.search.length) {
			const news = [...this.state.news];
			this.setState(() => {
				const searchNews = news.filter((row) => this.searchByTitle(row.title));
				return { oneNews: [...searchNews] };
			});
		}
		if (this.state.viewAllNews) {
			this.setState({ viewAllNews: !this.state.viewAllNews });
		}
	};

	searchByTitle = (row) => {
		const titleArr = row.split(' ');
		const searchWords = this.state.search;
		const serchWordArr = searchWords.split(' ');
		return titleArr.some((item) => serchWordArr.includes(item));
	};

	showNews = () => {
		this.api.getNews().then((data) => this.setState({ news: data, oneNews: [data[0]] }));
	};

	handleComeBack = () => {
		this.setState({ news: null, oneNews: null, viewAllNews: false });
		this.showNews();
	};

	componentDidMount() {
		this.showNews();
	}

	render() {
		const { news, viewAllNews, oneNews } = this.state;

		return (
			<div className='content_all'>
				<Header
					handleAscerding={this.handleAscerding}
					handleViewNews={this.handleViewNews}
					handleDescending={this.handleDescending}
					viewNews={viewAllNews}
					handleChange={this.handleChange}
					handleSearch={this.handleSearch}
					handleComeBack={this.handleComeBack}
				/>
				<News info={!viewAllNews ? oneNews : news} />
				<Footer />
			</div>
		);
	}
}
