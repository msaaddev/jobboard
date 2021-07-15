import '../styles/globals.css';
import { AuthProvider } from '../components/context/AuthContext';
import { JobProvider } from '../components/context/JobContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<JobProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</JobProvider>
		</AuthProvider>
	);
}

export default MyApp;
