import Jobs from '../components/Jobs';
import SEO from '../components/SEO';
import jobs from '../data/jobs.json';

export default function Home() {
	return (
		<>
			<SEO />
			{jobs.today.length > 0 && <Jobs day="Today" jobs={jobs.today} />}
			{jobs.week.length > 0 && <Jobs day="This Week" jobs={jobs.week} />}
			{jobs.month.length > 0 && (
				<Jobs day="This Month" jobs={jobs.month} />
			)}
		</>
	);
}
