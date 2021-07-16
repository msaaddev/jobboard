import styles from '../../styles/initial.module.css';

const Initial = ({ letter, name = '' }) => {
	return (
		<p className={styles.initial}>
			{letter} <br />
			{name !== '' && <span>{name}</span>}
		</p>
	);
};

export default Initial;
