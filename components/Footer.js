import styles from '../styles/footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<h3>
				Made with 💜 by{' '}
				<a href="https://github.com/msaaddev">Saad Irfan</a>
			</h3>
		</div>
	);
};

export default Footer;
