import Job from './common/Job';
import styles from '../styles/jobs.module.css';

const Jobs = ({ label, jobs }) => {
	return (
		<div className={styles.container}>
			<div className={styles.day}>
				<h2>{label}</h2>
			</div>
			<div className={styles.jobs}>
				{jobs.map((job) => {
					return (
						<Job
							key={job.id}
							letter={job.companyName[0]}
							title={job.jobTitle}
							date={job.date}
							company={job.companyName}
							location={job.jobArea}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Jobs;
