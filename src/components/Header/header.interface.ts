import { ChangeEvent } from 'react';

export type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

export interface IHeader {
	handleAscerding: () => void;
	handleViewNews: () => void;
	viewNews: boolean;
	handleDescending: () => void;
	handleSearch: () => void;
	handleChange: (e: ChangeEvent<FormControlElement>) => void;
	handleComeBack: () => void;
}
