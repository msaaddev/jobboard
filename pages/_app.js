import '../styles/globals.css';
import { AuthProvider } from '../components/context/AuthContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</Layout>
	);
}

export default MyApp;
