import { useState, createContext } from 'react';

const HireContext = createContext();

const HireProvider = ({ children }) => {
	// job states
	const [jobTitle, setJobTitle] = useState('');
	const [jobType, setJobType] = useState('Full-time');
	const [jobArea, setJobArea] = useState('');
	const [jobLink, setJobLink] = useState('');
	const [jobDescription, setJobDescription] = useState('');
	const [date, setDate] = useState('');

	// company states
	const [companyName, setCompanyName] = useState('');
	const [companyEmail, setCompanyEmail] = useState('');
	const [companyWebsite, setCompanyWebsite] = useState('');
	const [companyDescription, setCompanyDescription] = useState('');

	return (
		<HireContext.Provider
			value={{
				jobTitle,
				setJobTitle,
				jobType,
				setJobType,
				jobArea,
				setJobArea,
				jobLink,
				setJobLink,
				jobDescription,
				setJobDescription,
				companyName,
				setCompanyName,
				companyEmail,
				setCompanyEmail,
				companyWebsite,
				setCompanyWebsite,
				companyDescription,
				setCompanyDescription,
				date,
				setDate
			}}
		>
			{children}
		</HireContext.Provider>
	);
};

export { HireContext, HireProvider };
