import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default class Api {
	constructor() {
		this._apiBase =
			'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=';
		this._apiKey = '59a99021f0d74b768a674126f4a1fa89';
	}

	async getNews() {
		try {
			const response = await axios.get(`${this._apiBase}${this._apiKey}`);
			return response.data.articles.map(this._serelizeNews);
		} catch (err) {
			console.log(err);
			return Promise.reject(err);
		}
	}

	_serelizeNews(news) {
		return {
			id: uuidv4(),
			publishedAt: news.publishedAt,
			author: news.author,
			content: news.content,
			description: news.description,
			urlToImage: news.urlToImage,
			title: news.title,
		};
	}
}
