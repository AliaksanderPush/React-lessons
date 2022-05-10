import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { Nav, Navbar, Container, FormControl, Form } from 'react-bootstrap';
import { Button } from '../../components';
import { useActions } from '../../customHooks/useAction';
import { FormControlElement } from './Header.props';

export const Header: FC = () => {
	const [search, setSearch] = useState<string>('');

	const { searchNews } = useActions();

	const handleChange = (e: ChangeEvent<FormControlElement>) => {
		setSearch(e.target.value);
	};

	const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (search) {
			searchNews(search);
		}
	};

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#">News Today</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-6 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#action2">Home</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
							onChange={(e) => handleChange(e)}
						/>
						<Button
							className="me-2"
							onClick={(e) => handleSearch(e)}
							size={'s'}
							appearance={'ghost'}
						>
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
