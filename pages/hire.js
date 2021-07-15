import { useState } from 'react';
import { HireProvider } from '../components/context/HireContext';
import Form from '../components/Form';
import Thumbnail from '../components/Thumbnail';
import styles from '../styles/hire.module.css';

const Hire = () => {
	const [createJob, setCreateJob] = useState(
		`${styles.create_job} + ${styles.border}`
	);
	const [preview, setPreview] = useState(`${styles.preview}`);

	/**
	 *
	 *
	 * shows job creation seciton
	 */
	const handleJobCreation = () => {
		setCreateJob(`${styles.create_job} ${styles.border}`);
		setPreview(`${styles.preview}`);
	};

	/**
	 *
	 *
	 * shows preview
	 */
	const handlePreview = () => {
		setPreview(`${styles.preview} ${styles.border}`);
		setCreateJob(`${styles.create_job}`);
	};

	return (
		<div className={styles.container}>
			<HireProvider>
				<div className={styles.sub_container}>
					<div className={styles.tagline}>
						<h2>Hire Software Developers</h2>
						<h3>Post a Job Opening</h3>
					</div>
					<div className={styles.form}>
						<div className={styles.form_section_btns}>
							<div
								className={createJob}
								onClick={handleJobCreation}
							>
								<h3>Create Job</h3>
							</div>
							<div className={preview} onClick={handlePreview}>
								<h3>Preview</h3>
							</div>
						</div>
						<Form />
					</div>
				</div>
				<Thumbnail />
			</HireProvider>
		</div>
	);
};

export default Hire;
