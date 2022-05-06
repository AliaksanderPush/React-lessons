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

export type NewsAction = ILoadNewsAction | ILoadSuccessNewsAction | ILoadErrorNewsAction;
