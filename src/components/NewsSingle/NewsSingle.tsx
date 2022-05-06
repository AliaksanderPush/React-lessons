import { useEffect, useState } from 'react';
import { formatDateTime } from '../../helpers/helper';
import { INewsSingle } from './NewsSingle.props';
import { Button } from '..';
import styles from './NewsSingle.module.css';

export const NewsSingle = ({ index, item }: INewsSingle): JSX.Element => {
	const { publishedAt, urlToImage, title, content, description } = item;
	const data = formatDateTime(publishedAt);
	const [show, setShow] = useState<boolean>(false);

	const hanledWatch = () => {
		setShow(!show);
	};

	useEffect(() => {
		if (index === 0) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, [index]);

	return (
		<div className={styles.cards_container}>
			<div className={styles.cards_date}>{data}</div>
			<div className={styles.cards_image}>
				<img src={urlToImage} alt={title} />
			</div>
			<div className={styles.cards_title}>
				<div className={styles.cards_title_main}>{title}</div>
				<div className={styles.cards_btn}>
					<Button onClick={hanledWatch} appearance='primary' size='s'>
						More&gt;&gt;&gt;{' '}
					</Button>
				</div>
			</div>

			{show ? (
				<div className={styles.cards_details}>
					<div className={styles.cards_content}>{content}</div>
					<div className={styles.cards_descriptions}>{description}</div>
				</div>
			) : null}
		</div>
	);
};
