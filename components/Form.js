import Input from '../components/common/Input';
import Button from '../components/common/Button';
import styles from '../styles/form.module.css';

const Form = () => {
	return (
		<div className={styles.field_container}>
			<p>1. Job Details</p>
			<div className={styles.fields}>
				<Input
					htmlFor="job_title"
					label="Title"
					type="text"
					autoFocus={true}
					value=""
					widthMax={true}
					firstChildtopMargin={true}
				/>
				<Input
					htmlFor="job_type"
					label="Type"
					type="text"
					value=""
					dropdown={true}
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="job_area"
					label="City and Country"
					type="text"
					value=""
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="application"
					label="Application Link/Email"
					type="text"
					value=""
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="description"
					label="Description"
					placeholder="Enter job description..."
					type="text"
					value=""
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
					autoFocus={true}
					value=""
					widthMax={true}
					firstChildtopMargin={true}
				/>
				<Input
					htmlFor="job_email"
					label="Email"
					type="text"
					autoFocus={true}
					value=""
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="job_website"
					label="Website"
					type="text"
					autoFocus={true}
					value=""
					widthMax={true}
					mediumMargin={true}
				/>
				<Input
					htmlFor="description"
					label="Company Description"
					placeholder="Enter company description..."
					type="text"
					value=""
					widthMax={true}
					mediumMargin={true}
				/>
				<Button label="Preview" onClick="" />
			</div>
		</div>
	);
};

export default Form;
