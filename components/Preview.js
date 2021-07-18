import { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import fire from '../utils/firebase';
import Button from './common/Button';
import Initial from './common/Initial';
import { HireContext } from './context/HireContext';
import { JobContext } from './context/JobContext';
import { AuthContext } from './context/AuthContext';
import styles from '../styles/preview.module.css';

const Preview = ({ mainPreview = false }) => {
	// auth context data
	const { email } = useContext(AuthContext);

	// job contexts data
	const { jobTitle, jobType, jobArea, jobDescription, jobLink, date } =
		useContext(HireContext);

	// company contexts data
	const { companyName, companyEmail, companyWebsite, companyDescription } =
		useContext(HireContext);

	// job context data
	const { jobs, setJobs } = useContext(JobContext);
	const { userJobs, setUserJobs } = useContext(JobContext);

	/**
	 *
	 *
	 * post job to homepage
	 */
	const handlePostJob = () => {
		if (
			jobTitle !== '' &&
			jobArea !== '' &&
			jobDescription !== '' &&
			jobLink !== '' &&
			companyName !== '' &&
			companyEmail !== '' &&
			companyWebsite !== '' &&
			companyDescription !== ''
		) {
			console.log('hello');

			const newState = [...jobs];
			const newUserJobs = [...userJobs];

			let id;
			try {
				id = parseInt(newState[0].id) + 1;
			} catch (err) {
				id = 1;
			}

			const jobInfo = {
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
			};

			newState.unshift(jobInfo);
			newUserJobs.unshift(jobInfo);

			const db = fire.firestore();

			db.collection('users')
				.doc(email)
				.update({
					jobList: newUserJobs
				})
				.catch((err) => {
					console.log('Error updating the database', err);
				});

			db.collection('jobs')
				.doc('jobsDocument')
				.update({ allJobs: newState })
				.catch((err) => {
					console.log('Error updating the database', err);
				});

			setJobs(newState);
			setUserJobs(newUserJobs);

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
				{!mainPreview && (
					<Button label="Post Job" onClick={handlePostJob} />
				)}
				{mainPreview && (
					<Link href={`mailto:${jobLink}`}>
						<a>
							<Button label="Apply" onClick={handlePostJob} />
						</a>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Preview;
