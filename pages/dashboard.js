import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Job from '../components/common/Job';
import { AuthContext } from '../components/context/AuthContext';
import { JobContext } from '../components/context/JobContext';
import styles from '../styles/dashboard.module.css';

const Dashbaord = () => {
	const { setHasSignedIn } = useContext(AuthContext);
	const [isUser, setIsUser] = useState(false);
	const { userJobs, setUserJobs } = useContext(JobContext);

	useEffect(() => {
		setHasSignedIn(true);
	}, []);

	/**
	 *
	 *
	 *
	 */
	const handleDelete = (id) => {};

	return (
		<div className={styles.container}>
			<div className={styles.subcontainer_1}>
				<div className={styles.btn}>
					{isUser && <button>Applied Jobs</button>}
					{!isUser && <button>Posted Jobs</button>}
				</div>
			</div>
			<div className={styles.subcontainer_2}>
				<div className={styles.job_listing}>
					{!isUser ? (
						<div className={styles.org_jobs}>
							{userJobs.length > 0 ? (
								userJobs.map((job) => {
									<div className={styles.job_list}>
										<Job />
										<div
											className={styles.image}
											onClick={(job) =>
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
									</div>;
								})
							) : (
								<h2 className={styles.notice}>
									No jobs from your organization has been
									posted yet.
								</h2>
							)}
						</div>
					) : (
						<div className={styles.org_jobs}>
							{userJobs.length > 0 ? (
								userJobs.map((job) => {
									<div className={styles.job_list}>
										<Job />
									</div>;
								})
							) : (
								<h2 className={styles.notice}>
									You have not applied to any jobs yet...
								</h2>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashbaord;
