import { useState, createContext } from 'react';

const JobContext = createContext();

const JobProvider = ({ children }) => {
	const [jobs, setJobs] = useState([[], []]);
	const [individualJob, setIndividualJob] = useState('');

	return (
		<JobContext.Provider
			value={{ jobs, setJobs, individualJob, setIndividualJob }}
		>
			{children}
		</JobContext.Provider>
	);
};

export { JobContext, JobProvider };
