import { useEffect, useContext } from 'react';
import { AuthContext } from '../components/context/AuthContext';

const Dashbaord = () => {
	const { setHasSignedIn } = useContext(AuthContext);

	useEffect(() => {
		setHasSignedIn(true);
	}, []);

	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
};

export default Dashbaord;
