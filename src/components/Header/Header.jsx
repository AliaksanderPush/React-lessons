import React, { PureComponent } from 'react';
import { Button, NavDropdown, Nav, Navbar, Container, FormControl, Form } from 'react-bootstrap';

export default class Header extends PureComponent {
	render() {
		const {
			handleAscerding,
			handleViewNews,
			viewNews,
			handleDescending,
			handleSearch,
			handleChange,
			handleComeBack,
		} = this.props;

		return (
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container>
					<Navbar.Brand href='#'>News Today</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav
							className='me-auto my-6 my-lg-0'
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link onClick={handleViewNews} href='#action1'>
								{!viewNews ? 'View all news' : 'View important news'}
							</Nav.Link>
							<Nav.Link onClick={handleComeBack} href='#action2'>
								Come back
							</Nav.Link>

							<NavDropdown title='Sort by date' id='navbarScrollingDropdown'>
								<NavDropdown.Item onClick={handleAscerding} href='#action3'>
									ascending order
								</NavDropdown.Item>
								<NavDropdown.Item onClick={handleDescending} href='#action4'>
									descending order
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form className='d-flex'>
							<FormControl
								type='search'
								placeholder='Search'
								className='me-2'
								aria-label='Search'
								onChange={(e) => handleChange(e)}
							/>
							<Button onClick={handleSearch} variant='outline-success'>
								Search
							</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
