import { useState } from 'react';
import Input from '../components/common/Input';
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
			<div className={styles.sub_container}>
				<div className={styles.tagline}>
					<h2>Hire Software Developers</h2>
					<h3>Post a Job Opening</h3>
				</div>
				<div className={styles.form}>
					<div className={styles.form_section_btns}>
						<div className={createJob} onClick={handleJobCreation}>
							<h3>Create Job</h3>
						</div>
						<div className={preview} onClick={handlePreview}>
							<h3>Preview</h3>
						</div>
					</div>
					<div className={styles.field_container}>
						<p>1. Job Details</p>
						<div className={styles.fields}>
							<Input
								htmlFor="job_title"
								label="Title"
								type="text"
								autoFocus={true}
								value=""
								widthMax={true}
								firstChildtopMargin={true}
							/>
							<Input
								htmlFor="job_type"
								label="Type"
								type="text"
								value=""
								dropdown={true}
								widthMax={true}
								mediumMargin={true}
							/>
							<Input
								htmlFor="job_area"
								label="City and Country"
								type="text"
								value=""
								widthMax={true}
								mediumMargin={true}
							/>
							<Input
								htmlFor="application"
								label="Application Link/Email"
								type="text"
								value=""
								widthMax={true}
								mediumMargin={true}
							/>
							<Input
								htmlFor="description"
								label="Description"
								placeholder="Enter job description..."
								type="text"
								value=""
								widthMax={true}
								mediumMargin={true}
							/>
						</div>
						<hr />
						<p>2. Company Details</p>
						<div className={styles.fields}>
							<Input
								htmlFor="company_name"
								label="Name"
								type="text"
								autoFocus={true}
								value=""
								widthMax={true}
								firstChildtopMargin={true}
							/>
							<Input
								htmlFor="job_email"
								label="Email"
								type="text"
								autoFocus={true}
								value=""
								widthMax={true}
								mediumMargin={true}
							/>
							<Input
								htmlFor="job_website"
								label="Website"
								type="text"
								autoFocus={true}
								value=""
								widthMax={true}
								mediumMargin={true}
							/>
							<Input
								htmlFor="description"
								label="Company Description"
								placeholder="Enter company description..."
								type="text"
								value=""
								widthMax={true}
								mediumMargin={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hire;
