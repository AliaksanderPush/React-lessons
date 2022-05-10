export interface IMenu {
	viewAllNews: boolean;
	handleViewNews: () => void;
	handleFilterByData: (value: string | null) => void;
	handleShow: () => void;
	handleReset: () => void;
	showForm: boolean;
}
