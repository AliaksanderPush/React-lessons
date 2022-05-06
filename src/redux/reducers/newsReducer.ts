import { NewsAction, NewsActionTypes, INewsState } from '../types/news.types';

const initialState: INewsState = {
	news: [],
	loading: false,
	error: null,
};

export const newsReducer = (state = initialState, action: NewsAction): INewsState => {
	console.log('reducer>>', action);
	switch (action.type) {
		case NewsActionTypes.LOAD_NEWS:
			return { loading: true, error: null, news: [] };
		case NewsActionTypes.LOAD_NEWS_SUCCESS:
			return { loading: false, error: null, news: action.payload };
		case NewsActionTypes.LOAD_NEWS_ERROR:
			return { loading: false, error: action.payload, news: [] };
		default:
			return state;
	}
};
