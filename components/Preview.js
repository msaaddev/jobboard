import { useContext } from 'react';
import Button from './common/Button';
import Initial from './common/Initial';
import { HireContext } from './context/HireContext';
import styles from '../styles/preview.module.css';

const Preview = () => {
	// job contexts
	const { jobTitle, jobType, jobArea, jobDescription, date } =
		useContext(HireContext);

	// company contexts
	const { companyName, companyEmail, companyWebsite, companyDescription } =
		useContext(HireContext);

	return (
		<div className={styles.preview_container}>
			<div className={styles.initial_wrapper}>
				<Initial letter={companyName[0]} name={companyName} />
			</div>
			<div className={styles.job_title}>
				<h2>{jobTitle}</h2>
			</div>
			<div className={styles.side_info}>
				<p>
					<strong>Posted:</strong> {date}
				</p>
				<p>
					<strong>Job Type:</strong> {jobType}
				</p>
				<p>
					<strong>Location:</strong> {jobArea}
				</p>
			</div>
			<div className={styles.description}>
				<p>{jobDescription}</p>
			</div>
			<div className={styles.company}>
				<h2>About {companyName}</h2>
				<a href={companyWebsite}>Visit website</a>
				<br />
				<br />
				<a href={`mailto:${companyEmail}`}>Email them</a>
				<h3>Description</h3>
				<div className={styles.description}>
					<p>{companyDescription}</p>
				</div>
			</div>
			<div className={styles.btn}>
				<Button label="Post Job" onChange="" />
			</div>
		</div>
	);
};

export default Preview;
