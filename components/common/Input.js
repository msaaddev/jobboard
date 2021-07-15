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
	mediumMargin = false,
	placeholder
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
					label === 'Description' ||
					label === 'Company Description' ? (
						<>
							<label htmlFor={htmlFor} className={styles.label}>
								{label}
							</label>
							<textarea
								placeholder={placeholder}
								onChange={(e) => handleOnChange(e.target.value)}
								cols="30"
								rows="10"
								className={styles.input}
							></textarea>
							{err !== '' && <p className={styles.err}>{err}</p>}
						</>
					) : (
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
					)
				) : label === 'Type' ? (
					<>
						<label htmlFor={htmlFor} className={styles.label}>
							{label}
						</label>
						<select
							className={styles.input}
							onChange={(e) => handleOnChange(e.target.value)}
						>
							<option value="Full-time">Full-time</option>
							<option value="Part-time">Part-time</option>
							<option value="Contract">Contract</option>
							<option value="Internship">Internship</option>
						</select>
					</>
				) : (
					<>
						<label htmlFor={htmlFor} className={styles.label}>
							{label}
						</label>
						<select
							className={styles.input}
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
