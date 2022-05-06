import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newsActionCreators } from '../redux/acshions';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(newsActionCreators, dispatch);
};
