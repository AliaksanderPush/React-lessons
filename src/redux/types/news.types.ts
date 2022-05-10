import { INews } from '../../servis';

export interface INewsState {
	news: INews[];
	loading: boolean;
	error: null | string;
}

export enum NewsActionTypes {
	LOAD_NEWS = 'LOAD_NEWS',
	LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS',
	LOAD_NEWS_ERROR = 'LOAD_NEWS_ERROR',
	FILTER_NEWS_BY_DATA = 'FILTER_NEWS_BY_DATA',
	SEARCH_NEWS = 'SEARCH_NEWS',
	ADD_NEWS = 'ADD_NEWS',
}

interface ILoadNewsAction {
	type: NewsActionTypes.LOAD_NEWS;
}

interface ILoadSuccessNewsAction {
	type: NewsActionTypes.LOAD_NEWS_SUCCESS;
	payload: INews[];
}

interface ILoadErrorNewsAction {
	type: NewsActionTypes.LOAD_NEWS_ERROR;
	payload: string;
}

interface IShowAllNews {
	type: NewsActionTypes.FILTER_NEWS_BY_DATA;
	flag: boolean;
}

interface ISearchNews {
	type: NewsActionTypes.SEARCH_NEWS;
	words: string;
}

interface IAddNews {
	type: NewsActionTypes.ADD_NEWS;
	newNews: INews;
}

export type NewsAction =
	| ILoadNewsAction
	| ILoadSuccessNewsAction
	| ILoadErrorNewsAction
	| IShowAllNews
	| ISearchNews
	| IAddNews;
