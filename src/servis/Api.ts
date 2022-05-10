import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { INews } from './News.props';

const REACT_APP_API =
	'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=';
const REACT_APP_API_KEY = '59a99021f0d74b768a674126f4a1fa89'; //'4d494d9aa30b46ac89a057e391b1907b';

export const getNews = async (): Promise<INews[]> => {
	try {
		const response = await axios.get(
			`${REACT_APP_API}${REACT_APP_API_KEY}`
		);
		return await response.data.articles.map(serelizeNews);
	} catch (err) {
		console.log(err);
		return Promise.reject(err);
	}
};

const serelizeNews = (news: INews): INews => {
	return {
		id: uuidv4(),
		publishedAt: news.publishedAt,
		content: news.content,
		description: news.description,
		urlToImage: news.urlToImage,
		title: news.title,
	};
};
