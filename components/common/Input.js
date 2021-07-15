import { useState, useEffect } from 'react';
import styles from '../../styles/input.module.css';

const Input = ({
	htmlFor,
	label,
	type,
	autoFocus = false,
	value,
	handleOnChange,
	err = '',
	dropdown = false,
	widthMax = false,
	firstChildtopMargin = false,
	mediumMargin = false
}) => {
	const [container, setContainer] = useState(styles.container);

	useEffect(() => {
		let temp;

		if (widthMax) {
			temp = container;
			setContainer(`${temp} ${styles.width}`);

			if (firstChildtopMargin) {
				setContainer(`${temp} ${styles.width} ${styles.top_margin}`);
			}

			if (mediumMargin) {
				setContainer(`${temp} ${styles.width} ${styles.medium_margin}`);
			}
		}
	}, []);

	return (
		<>
			<div className={container}>
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
				) : label === 'Type' ? (
					<>
						<label htmlFor={htmlFor} className={styles.label}>
							{label}
						</label>
						<select
							onChange={(e) => handleOnChange(e.target.value)}
						>
							<option value="full_time">Full time</option>
							<option value="part_time">Part time</option>
							<option value="contract">Contract</option>
							<option value="internship">Internship</option>
						</select>
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
