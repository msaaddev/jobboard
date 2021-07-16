import { useContext } from 'react';
import Router from 'next/router';
import Button from './common/Button';
import Initial from './common/Initial';
import { HireContext } from './context/HireContext';
import { JobContext } from './context/JobContext';
import styles from '../styles/preview.module.css';

const Preview = () => {
	// job contexts
	const { jobTitle, jobType, jobArea, jobDescription, jobLink, date } =
		useContext(HireContext);

	// company contexts
	const { companyName, companyEmail, companyWebsite, companyDescription } =
		useContext(HireContext);

	const { jobs, setJobs } = useContext(JobContext);

	/**
	 *
	 *
	 * post job to homepage
	 */
	const handlePostJob = () => {
		if (
			jobTitle !== '' ||
			jobTitle !== '' ||
			jobArea !== '' ||
			jobDescription !== '' ||
			jobLink !== '' ||
			companyName !== '' ||
			companyEmail !== '' ||
			companyWebsite !== '' ||
			companyWebsite !== ''
		) {
			const newState = [...jobs];

			let id;
			try {
				id = parseInt(newState[0].id) + 1;
			} catch (err) {
				id = 1;
			}

			newState.unshift({
				id,
				jobTitle,
				jobType,
				jobArea,
				jobLink,
				jobDescription,
				companyName,
				companyEmail,
				companyWebsite,
				companyDescription,
				date
			});
			setJobs(newState);

			Router.push('/');
		}
	};

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
				<Button label="Post Job" onClick={handlePostJob} />
			</div>
		</div>
	);
};

export default Preview;
