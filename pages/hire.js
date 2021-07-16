import { useState } from 'react';
import Form from '../components/Form';
import Preview from '../components/Preview';
import Thumbnail from '../components/Thumbnail';
import styles from '../styles/hire.module.css';

const Hire = () => {
	const [createJob, setCreateJob] = useState(
		`${styles.create_job} + ${styles.border}`
	);
	const [preview, setPreview] = useState(`${styles.preview}`);
	const [showForm, setShowForm] = useState(true);
	const [showPreview, setShowPreview] = useState(false);

	/**
	 *
	 *
	 * shows job creation seciton
	 */
	const handleJobCreation = () => {
		setCreateJob(`${styles.create_job} ${styles.border}`);
		setPreview(`${styles.preview}`);
		setShowForm(true);
		setShowPreview(false);
	};

	/**
	 *
	 *
	 * shows preview
	 */
	const handlePreview = () => {
		setPreview(`${styles.preview} ${styles.border}`);
		setCreateJob(`${styles.create_job}`);
		setShowForm(false);
		setShowPreview(true);
	};

	return (
		<div className={styles.container}>
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
						{showForm && <Form onClick={handlePreview} />}
						{showPreview && <Preview />}
					</div>
				</div>
				<Thumbnail />
		</div>
	);
};

export default Hire;
