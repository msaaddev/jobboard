import Nav from '../components/common/Nav';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
