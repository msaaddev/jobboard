import SEO from './SEO';
import Nav from '../components/common/Nav';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<SEO />
			<Nav />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
