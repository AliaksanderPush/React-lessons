import { ChangeEvent, MouseEvent } from 'react';

export type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

export interface IHeader {
	handleAscerding: () => void;
	handleViewNews: () => void;
	viewNews: boolean;
	handleDescending: () => void;
	handleSearch: (e: MouseEvent<HTMLButtonElement>) => void;
	handleChange: (e: ChangeEvent<FormControlElement>) => void;
	handleComeBack: () => void;
	handleShow: (e: MouseEvent<HTMLButtonElement>) => void;
}
