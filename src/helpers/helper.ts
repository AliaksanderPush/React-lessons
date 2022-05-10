import { INews } from '../servis';

export function getDateTime(): string {
	const dt = new Date();
	return formatDate(dt);
}

export function formatDateTime(currTime: string): string {
	const dt = new Date(currTime);
	return formatDate(dt);
}

function formatDate(dt: Date): string {
	const year = dt.getFullYear();
	const month = dt.getMonth() + 1;
	const day = dt.getDate();
	const hours = dt.getHours();
	const minutes = dt.getMinutes();
	const seconds = dt.getSeconds();
	return (
		str0l(day, 2) +
		'.' +
		str0l(month, 2) +
		'.' +
		year +
		' ' +
		str0l(hours, 2) +
		':' +
		str0l(minutes, 2) +
		':' +
		str0l(seconds, 2)
	);
}

function str0l(val: number, len: number): string {
	let strVal = val.toString();
	while (strVal.length < len) strVal = '0' + strVal;
	return strVal;
}

export const searchByTitle = (
	row: INews['title'],
	searchWords: string
): boolean => {
	const titleArr = row.split(' ');
	const serchWordArr = searchWords.split(' ');
	return titleArr.some((item) => serchWordArr.includes(item));
};
