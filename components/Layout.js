import styles from '../styles/layout.module.css';
import Nav from '../components/common/Nav';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default Layout;
