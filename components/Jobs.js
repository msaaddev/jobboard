import Job from './common/Job';
import styles from '../styles/jobs.module.css';

const Jobs = ({ day, jobs }) => {
	return (
		<div className={styles.container}>
			<div className={styles.day}>
				<h2>{day}</h2>
			</div>
			<div className={styles.jobs}>
				{jobs.map((job) => {
					return (
						<Job
							key={job.id}
							title={job.title}
							date={job.date}
							company={job.company}
							location={job.location}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Jobs;
