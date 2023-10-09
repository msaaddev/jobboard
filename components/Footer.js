import styles from '../styles/footer.module.css';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className={styles.container}>
			<h3>
				Made with 💜 by{' '}
				<Link href="https://github.com/msaaddev">Saad Irfan</Link>
			</h3>
		</div>
	);
};

export default Footer;
