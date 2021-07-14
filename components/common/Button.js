import styles from '../../styles/button.module.css';

const Button = ({ label, onClick }) => {
	return (
		<div className={styles.container}>
			<button onClick={onClick}>{label}</button>
		</div>
	);
};

export default Button;
