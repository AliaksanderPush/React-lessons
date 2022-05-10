import { NewsAction, NewsActionTypes, INewsState } from '../types/news.types';
import { searchByTitle } from '../../helpers/helper';

const initialState: INewsState = {
	news: [],
	loading: false,
	error: null,
};

export const newsReducer = (
	state = initialState,
	action: NewsAction
): INewsState => {
	switch (action.type) {
		case NewsActionTypes.LOAD_NEWS:
			return {
				loading: true,
				error: null,
				news: [],
			};
		case NewsActionTypes.LOAD_NEWS_SUCCESS:
			return {
				loading: false,
				error: null,
				news: action.payload,
			};

		case NewsActionTypes.LOAD_NEWS_ERROR:
			return {
				loading: false,
				error: action.payload,
				news: [],
			};
		case NewsActionTypes.FILTER_NEWS_BY_DATA:
			const { news } = state;
			if (!action.flag) {
				const newState = news.sort(
					(a, b) =>
						Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
				);
				return {
					...state,
					news: newState,
				};
			} else {
				const newState = news.sort(
					(a, b) =>
						Date.parse(a.publishedAt) - Date.parse(b.publishedAt)
				);
				return {
					...state,
					news: newState,
				};
			}
		case NewsActionTypes.SEARCH_NEWS: {
			const { news } = state;
			const searchNews = news.filter((row) =>
				searchByTitle(row.title, action.words)
			);

			return {
				...state,
				news: searchNews,
			};
		}
		case NewsActionTypes.ADD_NEWS:
			return {
				...state,
				news: [action.newNews, ...state.news],
			};

		default:
			return state;
	}
};
