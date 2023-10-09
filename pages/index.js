import { useContext, useEffect } from 'react';
import Load from '../components/common/Load';
import fire from '../utils/firebase';
import { JobContext } from '../components/context/JobContext';
import Jobs from '../components/Jobs';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


export default function Home() {
	const db = getFirestore(fire);

	const { jobs, setJobs } = useContext(JobContext);

	useEffect(() => {

		async function getJobs() {
			const jobsCol = collection(db, 'jobs');
			const jobSnapshot = await getDocs(jobsCol);
			const jobList = jobSnapshot.docs.map((doc) => doc.data());
			return jobList;
		}

		jobs.length < 1 &&
			getJobs().then((jobList) => {
				setJobs(jobList);
				console.log(jobList);
			});
	}, []);

	return (
		<>
			{(jobs.length > 0 && (
				<Jobs label="All the Developer Jobs" jobs={jobs} />
			)) || <Load />}
		</>
	);
}
