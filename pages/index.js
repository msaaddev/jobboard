import Jobs from '../components/Jobs';
import SEO from '../components/SEO';
import jobs from '../data/jobs.json';

export default function Home() {
	return (
		<>
			<SEO />
			<Jobs day="Today" jobs={jobs.today} />
			<Jobs day="This Week" jobs={jobs.week} />
			<Jobs day="This Month" jobs={jobs.month} />
		</>
	);
}
