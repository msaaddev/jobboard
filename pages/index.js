import { useContext, useEffect } from 'react';
import { JobContext } from '../components/context/JobContext';
import Jobs from '../components/Jobs';

export default function Home() {
	const { jobs } = useContext(JobContext);

	return (
		<>
			{jobs.length > 0 && (
				<Jobs label="All the Developer Jobs" jobs={jobs} />
			)}
		</>
	);
}
