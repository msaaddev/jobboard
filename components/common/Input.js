import styles from '../../styles/input.module.css';

const Input = ({
	htmlFor,
	label,
	type,
	autoFocus = false,
	value,
	handleOnChange,
	err
}) => {
	return (
		<>
			<div className={styles.container}>
				<label htmlFor={htmlFor} className={styles.label}>
					{label}
				</label>
				<input
					type={type}
					autoFocus={autoFocus}
					required
					value={value}
					onChange={(e) => handleOnChange(e.target.value)}
					className={styles.input}
				/>
				{err !== '' && <p className={styles.err}>{err}</p>}
			</div>
		</>
	);
};

export default Input;
