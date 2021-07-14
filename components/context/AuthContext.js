import { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [passwordErr, setPasswordErr] = useState('');
	const [isOrg, setIsOrg] = useState(true);
	const [hasSignedIn, setHasSignedIn] = useState(false);

	return (
		<AuthContext.Provider
			value={{
				user,
				setUser,
				email,
				setEmail,
				password,
				setPassword,
				emailErr,
				setEmailErr,
				passwordErr,
				setPasswordErr,
				isOrg,
				setIsOrg,
				hasSignedIn,
				setHasSignedIn
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
