import Image from 'next/image';
import Initial from './Initial';
import styles from '../../styles/job.module.css';

const Job = ({ letter, title, date, company, location }) => {
	return (
		<div className={styles.container}>
			<Initial letter={letter} />
			<div className={styles.job_info}>
				<div className={styles.title_wrapper}>
					<p className={styles.title}>{title}</p>
					<p className={styles.date}>{date}</p>
				</div>
				<p className={styles.company}>{company}</p>
				<p className={styles.location}>
					{' '}
					<Image
						src="/location.png"
						alt="location"
						width={14}
						height={14}
					/>{' '}
					{location}
				</p>
			</div>
		</div>
	);
};

export default Job;
