import { IInfo } from './Info.props';
import { Container, Row, Col } from 'react-bootstrap';
import { NewsSingle } from '..';

export const News = ({ info }: IInfo): JSX.Element => {
	if (!info[0]) return <div></div>;
	return (
		<Container>
			<Row>
				{info.map((item, index) => {
					return (
						<Col
							className="d-flex justify-content-center"
							md={12}
							key={item.id}
						>
							<NewsSingle index={index} item={item} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
