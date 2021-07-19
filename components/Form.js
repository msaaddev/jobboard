import { useContext, useEffect } from 'react';
import { HireContext } from './context/HireContext';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import styles from '../styles/form.module.css';

const Form = ({ onClick }) => {
	// job contexts
	const { jobTitle, setJobTitle } = useContext(HireContext);
	const { jobType, setJobType } = useContext(HireContext);
	const { jobArea, setJobArea } = useContext(HireContext);
	const { jobLink, setJobLink } = useContext(HireContext);
	const { jobDescription, setJobDescription } = useContext(HireContext);
	const { setDate } = useContext(HireContext);

	// company contexts
	const { companyName, setCompanyName } = useContext(HireContext);
	const { companyEmail, setCompanyEmail } = useContext(HireContext);
	const { companyWebsite, setCompanyWebsite } = useContext(HireContext);
	const { companyDescription, setCompanyDescription } =
		useContext(HireContext);

	useEffect(() => {
		const date = new Date();
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		setDate(`${months[date.getMonth()]} ${date.getDate()}`);
	}, []);

	return (
		<div className={styles.field_container}>
			<p>1. Job Details</p>
			<div className={styles.fields}>
				<Input
					htmlFor="job_title"
					label="Title"
					type="text"
					autoFocus={true}
					value={jobTitle}
					handleOnChange={setJobTitle}
					widthMax={true}
					firstChildtopMargin={true}
				/>
				<Input
					htmlFor="job_type"
					label="Type"
					type="text"
					value={jobType}
					handleOnChange={setJobType}
					dropdown={true}
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="job_area"
					label="City and Country"
					type="text"
					value={jobArea}
					handleOnChange={setJobArea}
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="application"
					label="Application Email"
					type="text"
					value={jobLink}
					handleOnChange={setJobLink}
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="description"
					label="Description"
					placeholder="Enter job description..."
					type="text"
					value={jobDescription}
					handleOnChange={setJobDescription}
					widthMax={true}
					mediumMargin={true}
				/>
			</div>
			<hr />
			<p>2. Company Details</p>
			<div className={styles.fields}>
				<Input
					htmlFor="company_name"
					label="Name"
					type="text"
					value={companyName}
					handleOnChange={setCompanyName}
					widthMax={true}
					firstChildtopMargin={true}
				/>
				<Input
					htmlFor="job_email"
					label="Email"
					type="email"
					value={companyEmail}
					handleOnChange={setCompanyEmail}
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="job_website"
					label="Website"
					type="text"
					value={companyWebsite}
					handleOnChange={setCompanyWebsite}
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="description"
					label="Company Description"
					placeholder="Enter company description..."
					type="text"
					value={companyDescription}
					handleOnChange={setCompanyDescription}
					widthMax={true}
					mediumMargin={true}
				/>
				<div className={styles.btn}>
					<Button label="Preview" onClick={onClick} />
				</div>
			</div>
		</div>
	);
};

export default Form;
