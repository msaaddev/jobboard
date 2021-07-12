import Jobs from '../components/Jobs';
import SEO from '../components/SEO';
import jobs from '../data/jobs.json';
import { useState, useEffect } from 'react';

export default function Home() {
	/* const [day, setDay] = useState([]);

	useEffect(() => {
		return () => {
			const days = Object.keys(jobs);
			setDay(da)
		};
	}, []); */

	return (
		<>
			<SEO />
			<Jobs day="Today" jobs={jobs.today} />
			<Jobs day="This Week" jobs={jobs.week} />
			<Jobs day="This Month" jobs={jobs.month} />
		</>
	);
}
