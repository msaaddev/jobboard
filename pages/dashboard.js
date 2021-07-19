import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import fire from '../utils/firebase';
import Job from '../components/common/Job';
import { AuthContext } from '../components/context/AuthContext';
import { JobContext } from '../components/context/JobContext';
import styles from '../styles/dashboard.module.css';

const Dashbaord = () => {
	const { email, setHasSignedIn, setIsOrg: flag } = useContext(AuthContext);
	const { jobs, setJobs, userJobs, setUserJobs } = useContext(JobContext);
	const [isOrg, setIsOrg] = useState(false);
	const [orgMsg, setOrgMsg] = useState('');
	const [usrMsg, setUsrMsg] = useState('');

	useEffect(() => {
		const eml = localStorage.getItem('email');
		const db = fire.firestore();

		setOrgMsg('Loading...');
		setUsrMsg('Loading...');
		db.collection('users')
			.doc(eml)
			.onSnapshot((doc) => {
				const org = doc.data().isOrg;
				const jobs = doc.data().jobList;
				setIsOrg(org);
				flag(org);
				setUserJobs(jobs);
				setOrgMsg(
					'No jobs from your organization has been posted yet.'
				);
				setUsrMsg('You have not applied to any jobs yet...');
			});

		setHasSignedIn(true);
	}, []);

	/**
	 *
	 *
	 *	delete job
	 */
	const handleDelete = (id) => {
		let firstIndex, secondIndex;
		for (let i = 0; i < userJobs.length; i++) {
			if (userJobs[i].id === id) {
				firstIndex = i;
				break;
			}
		}

		for (let i = 0; i < jobs.length; i++) {
			if (jobs[i].id === id) {
				secondIndex = i;
				break;
			}
		}

		const newState = [...userJobs];
		newState.splice(firstIndex, 1);

		const newJobState = [...jobs];
		newJobState.splice(secondIndex, 1);

		const db = fire.firestore();

		db.collection('users')
			.doc(email)
			.update({
				jobList: newState
			})
			.catch((err) => {
				console.log('Error updating the database', err);
			});

		setUserJobs(newState);
		setJobs(newJobState);
	};

	return (
		<div className={styles.container}>
			<div className={styles.subcontainer_1}>
				<div className={styles.btn}>
					{!isOrg && <button>Applied Jobs</button>}
					{isOrg && <button>Posted Jobs</button>}
				</div>
			</div>
			<div className={styles.subcontainer_2}>
				<div className={styles.job_listing}>
					{isOrg ? (
						<div className={styles.org_jobs}>
							{userJobs.length > 0 ? (
								userJobs.map((job) => {
									return (
										<div
											className={styles.job_list}
											key={job.id}
										>
											<Job
												letter={job.companyName[0]}
												title={job.jobTitle}
												date={job.date}
												company={job.companyName}
												location={job.jobArea}
												id={job.id}
												isPreview={false}
											/>
											<div
												className={styles.image}
												onClick={() =>
													handleDelete(job.id)
												}
											>
												<Image
													src="/delete.png"
													alt="delete"
													width={512}
													height={512}
												/>
											</div>
										</div>
									);
								})
							) : (
								<h2 className={styles.notice}>{orgMsg}</h2>
							)}
						</div>
					) : (
						<div className={styles.org_jobs}>
							{userJobs.length > 0 ? (
								userJobs.map((job) => {
									return (
										<div className={styles.job_list}>
											<Job
												letter={job.companyName[0]}
												title={job.jobTitle}
												date={job.date}
												company={job.companyName}
												location={job.jobArea}
												isPreview={false}
												id={job.id}
											/>
										</div>
									);
								})
							) : (
								<h2 className={styles.notice}>{usrMsg}</h2>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashbaord;
