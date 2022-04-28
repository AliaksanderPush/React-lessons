import React, { PureComponent } from 'react';
import NewsSingle from '../NewsSingle';
import { Row, Col, Container } from 'react-bootstrap';

export default class News extends PureComponent {
	render() {
		const { info } = this.props;

		return (
			<>
				<Container>
					<Row>
						{info?.map((item, index) => {
							return (
								<Col
									className='d-flex justify-content-center'
									md={12}
									key={item.id}
								>
									<NewsSingle index={index} item={item} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</>
		);
	}
}
