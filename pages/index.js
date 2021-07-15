import { useContext } from 'react';
import { JobContext } from '../components/context/JobContext';
import Jobs from '../components/Jobs';
import SEO from '../components/SEO';
// import jobs from '../data/jobs.json';

export default function Home() {
	const { jobs } = useContext(JobContext);

	return (
		<>
			<SEO />
			{jobs[0].length > 0 && <Jobs day="Today" jobs={jobs[0]} />}
			{jobs[1].length > 0 && <Jobs day="This Month" jobs={jobs[1]} />}
		</>
	);
}
