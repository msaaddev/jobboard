import styles from '../../styles/helperMsg.module.css';
import Link from 'next/link';

const HelperMsg = ({ content, option, url }) => {
	return (
		<div className={styles.container}>
			<p>
				{content}{' '}
				<span>
					<Link href={`/${url}`}>
						<>{option}</>
					</Link>
				</span>
			</p>
		</div>
	);
};

export default HelperMsg;
