import ContentLoader from 'react-content-loader';
import styles from '../../styles/load.module.css';

const Load = () => (
	<div className={styles.container}>
		<ContentLoader speed={2} width={800} height={200} viewBox="0 0 800 200">
			<rect x="1" y="20" rx="2" ry="2" width="140" height="10" />
			<rect x="1" y="36" rx="2" ry="2" width="140" height="10" />
			<rect x="0" y="60" rx="2" ry="2" width="800" height="200" />
		</ContentLoader>
	</div>
);

export default Load;
