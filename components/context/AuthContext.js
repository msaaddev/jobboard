import { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [passwordErr, setPasswordErr] = useState('');

	return (
		<AuthContext.Provider
			value={[
				user,
				setUser,
				email,
				setEmail,
				password,
				setPassword,
				emailErr,
				setEmailErr,
				passwordErr,
				setPasswordErr
			]}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
