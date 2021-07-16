import { useContext, useEffect } from 'react';
import { JobContext } from '../context/JobContext';
import { HireContext } from '../context/HireContext';
import Preview from '../Preview';

const FPreview = ({ id }) => {
	// job contexts
	const {
		setJobTitle,
		setJobType,
		setJobArea,
		setJobDescription,
		setJobLink
	} = useContext(HireContext);

	// company contexts
	const {
		setCompanyName,
		setCompanyEmail,
		setCompanyWebsite,
		setCompanyDescription
	} = useContext(HireContext);

	const { jobs } = useContext(JobContext);

	useEffect(() => {
		const length = jobs.length - 1;
		const index = length - (id - 1);
		const data = jobs[index];
		setJobTitle(data.jobTitle);
		setJobType(data.jobType);
		setJobArea(data.jobArea);
		setJobDescription(data.jobDescription);
		setJobLink(data.jobLink);
		setCompanyName(data.companyName);
		setCompanyEmail(data.companyEmail);
		setCompanyWebsite(data.companyWebsite);
		setCompanyDescription(data.companyDescription);
	}, []);

	return <Preview mainPreview={true} />;
};

export default FPreview;
