import '../styles/globals.css';
import { AuthProvider } from '../components/context/AuthContext';
import { JobProvider } from '../components/context/JobContext';
import { HireProvider } from '../components/context/HireContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<JobProvider>
				<HireProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</HireProvider>
			</JobProvider>
		</AuthProvider>
	);
}

export default MyApp;
