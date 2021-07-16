import { useState, useEffect } from 'react';
import styles from '../../styles/initial.module.css';

const Initial = ({ letter, name = '' }) => {
	const [container, setContainer] = useState(styles.initial);

	useEffect(() => {
		if (name !== '') {
			setContainer(`${container} ${styles.margin}`);
		}
	}, []);

	return (
		<p className={container}>
			{letter} <br />
			{name !== '' && <span>{name}</span>}
		</p>
	);
};

export default Initial;
