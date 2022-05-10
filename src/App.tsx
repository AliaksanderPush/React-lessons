import { FC } from 'react';
import { NewsPage } from './pages/news/News.page';
import { withLayout } from './layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
	return (
		<>
			<NewsPage />
		</>
	);
};

export default withLayout(App);
