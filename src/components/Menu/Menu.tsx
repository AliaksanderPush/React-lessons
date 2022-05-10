import { Row, Col, Dropdown } from 'react-bootstrap';
import { Button } from '..';
import { IMenu } from './Menu.props';
import styles from './Menu.module.css';

export const Menu = ({
	handleFilterByData,
	handleViewNews,
	viewAllNews,
	handleShow,
	handleReset,
	showForm,
}: IMenu): JSX.Element => {
	return (
		<div className={styles.menu_container}>
			<Row className="d-flex justify-content-center mt-2">
				<Col md={6}>
					<Button
						onClick={handleViewNews}
						appearance="primary"
						size="m"
					>
						{viewAllNews
							? 'Click to Load all news'
							: 'Click to Load title news'}
					</Button>
					<Button onClick={handleShow} appearance="ghost" size="s">
						{!showForm ? 'Add News' : 'Hide form'}
					</Button>
				</Col>
				<Col md={6} className="d-flex justify-content-end">
					<Button onClick={handleReset} appearance="ghost" size="s">
						Reset
					</Button>
					<Dropdown onSelect={(value) => handleFilterByData(value)}>
						<Dropdown.Toggle variant="primary" id="dropdown-basic">
							Sort by date
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">
								new date
							</Dropdown.Item>
							<Dropdown.Item href="#/action-2">
								old date
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
			</Row>
		</div>
	);
};
