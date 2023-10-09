import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/context/AuthContext';
import { JobContext } from '../components/context/JobContext';
import fire from '../utils/firebase';
import Input from '../components/common/Input';
import HelperMsg from '../components/common/HelperMsg';
import Button from '../components/common/Button';
import styles from '../styles/auth.module.css';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

const Login = () => {
	const { user, setUser } = useContext(AuthContext);
	const { email, setEmail } = useContext(AuthContext);
	const { password, setPassword } = useContext(AuthContext);
	const { emailErr, setEmailErr } = useContext(AuthContext);
	const { passwordErr, setPasswordErr } = useContext(AuthContext);
	const { setHasSignedIn, hasSignedIn } = useContext(AuthContext);
	const { setIsOrg } = useContext(AuthContext);
	const { userJobs, setUserJobs } = useContext(JobContext);
	const router = useRouter();
	const auth = getAuth(fire);
	const db = getFirestore(fire);

	/**
	 *
	 *
	 * reset values ofo inputs to empty string
	 */
	const clearInput = () => {
		setEmail('');
		setPassword('');
	};

	/**
	 *
	 *
	 * reset values of errors to empty string
	 */
	const clearErrs = () => {
		setEmailErr('');
		setPasswordErr('');
	};


	const handleLogin = async () => {
		clearErrs();

		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
			if (user) {
				setHasSignedIn(true);
				localStorage.setItem('hasSignedIn', true);
				localStorage.setItem('email', email);
				router.push('/dashboard');
			} else {
				console.error('User document does not exist.');
			}
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(error.code);

			if (
				errorCode === 'auth/invalid-login-credentials' ||
				errorCode === 'auth/invalid-email'
			) {
				setEmailErr(errorMessage);
			}

			if (errorCode === 'auth/weak-password') {
				setPasswordErr(errorMessage);
			}
		}

	};

	/**
	 *
	 *
	 * checks where the user is logged in or not
	 */
	const authListener = () => {
		// fire.auth().onAuthStateChanged((user) => {
		// 	if (user) {
		// 		setUser(user);
		// 	} else {
		// 		setUser('');
		// 	}
		// });

		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setHasSignedIn(true);
				localStorage.setItem('hasSignedIn', true);
				localStorage.setItem('email', email);
				router.push('/dashboard');
			} else {
				setUser('');
			}
		});
	};

	useEffect(() => {
		// authListener();
		if (hasSignedIn) {
			router.push('/dashboard');
		}
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<Input
					htmlFor="email"
					label="Email"
					type="email"
					autoFocus={true}
					value={email}
					handleOnChange={setEmail}
					err={emailErr}
				/>
				<Input
					htmlFor="password"
					label="Password"
					type="password"
					value={password}
					handleOnChange={setPassword}
					err={passwordErr}
				/>
				<Button label="Login" onClick={handleLogin} />
				<HelperMsg
					content="Don't have an account?"
					option="Sign Up"
					url="signup"
				/>
			</div>
		</div>
	);
};

export default Login;
