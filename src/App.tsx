import { FC } from 'react';
import { NewsPage } from './pages/news/News.page';
import { Footer } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
	return (
		<div className='content_all'>
			<NewsPage />
			<Footer />
		</div>
	);
};

export default App;
