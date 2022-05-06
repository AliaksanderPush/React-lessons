import { NewsAction, NewsActionTypes } from '../types/news.types';
import { Dispatch } from 'redux';
import { getNews } from '../../servis';

export const fetchNews = () => {
	return async (dispatch: Dispatch<NewsAction>) => {
		try {
			dispatch({ type: NewsActionTypes.LOAD_NEWS });
			const response = await getNews();
			console.log('res>>', response);
			dispatch({ type: NewsActionTypes.LOAD_NEWS_SUCCESS, payload: response });
		} catch (e) {
			dispatch({
				type: NewsActionTypes.LOAD_NEWS_ERROR,
				payload: 'Error',
			});
		}
	};
};
