import { INews } from '../../servis';

export interface IForm {
	handleAddNews: (data: INews) => void;
}
