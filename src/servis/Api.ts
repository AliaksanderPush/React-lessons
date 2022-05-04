import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { IApi } from './api.interface';

const REACT_APP_API = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=';
const REACT_APP_API_KEY = '59a99021f0d74b768a674126f4a1fa89';

export const getNews = async (): Promise<IApi[]> => {
	try {
		const response = await axios.get(`${REACT_APP_API}${REACT_APP_API_KEY}`);
		return response.data.articles.map(serelizeNews);
	} catch (err) {
		console.log(err);
		return Promise.reject(err);
	}
};

const serelizeNews = (news: IApi): IApi => {
	return {
		id: uuidv4(),
		publishedAt: news.publishedAt,
		content: news.content,
		description: news.description,
		urlToImage: news.urlToImage,
		title: news.title,
	};
};
