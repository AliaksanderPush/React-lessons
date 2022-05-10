import { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div className={styles.content_all}>{children}</div>
			<Footer />
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};