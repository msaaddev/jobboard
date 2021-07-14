import styles from '../../styles/input.module.css';

const Input = ({
	htmlFor,
	label,
	type,
	autoFocus = false,
	value,
	handleOnChange,
	err,
	dropdown = false
}) => {
	return (
		<>
			<div className={styles.container}>
				{!dropdown ? (
					<>
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
					</>
				) : (
					<>
						<label htmlFor={htmlFor} className={styles.label}>
							{label}
						</label>
						<select
							onChange={(e) => handleOnChange(e.target.value)}
						>
							<option value={true}>Yes</option>
							<option value={false}>No</option>
						</select>
					</>
				)}
			</div>
		</>
	);
};

export default Input;
