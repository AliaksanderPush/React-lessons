import { INews } from './../../servis/News.props';
import { NewsAction, NewsActionTypes } from '../types/news.types';
import { Dispatch } from 'redux';
import { getNews } from '../../servis';

export const fetchNews = () => {
	return async (dispatch: Dispatch<NewsAction>) => {
		try {
			dispatch({ type: NewsActionTypes.LOAD_NEWS });
			const response = await getNews();
			dispatch({
				type: NewsActionTypes.LOAD_NEWS_SUCCESS,
				payload: response,
			});
		} catch (e) {
			dispatch({
				type: NewsActionTypes.LOAD_NEWS_ERROR,
				payload: 'Error',
			});
		}
	};
};

export const sortNewsByData = (flag: boolean) => {
	return {
		type: NewsActionTypes.FILTER_NEWS_BY_DATA,
		flag,
	};
};

export const searchNews = (searchWords: string) => {
	return {
		type: NewsActionTypes.SEARCH_NEWS,
		words: searchWords,
	};
};

export const addNews = (news: INews) => {
	return {
		type: NewsActionTypes.ADD_NEWS,
		newNews: news,
	};
};
