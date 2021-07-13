import styles from '../styles/jobs.module.css';
import Image from 'next/image';

const Jobs = ({ day, jobs }) => {
	return (
		<div className={styles.container}>
			<div className={styles.day}>
				<h2>{day}</h2>
			</div>
			<div className={styles.jobs}>
				{jobs.map((job) => {
					return (
						<div
							className={styles.job_container}
							key={Math.random() * 10000}
						>
							<p className={styles.initial}>{job.letter}</p>
							<div className={styles.job_info}>
								<div className={styles.title_wrapper}>
									<p className={styles.title}>{job.title}</p>
									<p className={styles.date}>{job.date}</p>
								</div>
								<p className={styles.company}>{job.company}</p>
								<p className={styles.location}>
									{' '}
									<Image
										src="/location.png"
										alt="location"
										width={14}
										height={14}
									/>{' '}
									{job.location}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Jobs;
