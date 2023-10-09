import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/context/AuthContext';
import Input from '../components/common/Input';
import HelperMsg from '../components/common/HelperMsg';
import Button from '../components/common/Button';
import fire from '../utils/firebase';
import styles from '../styles/auth.module.css';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
	const { user, setUser } = useContext(AuthContext);
	const { email, setEmail } = useContext(AuthContext);
	const { password, setPassword } = useContext(AuthContext);
	const { emailErr, setEmailErr } = useContext(AuthContext);
	const { passwordErr, setPasswordErr } = useContext(AuthContext);
	const { isOrg, setIsOrg } = useContext(AuthContext);
	const { hasSignedIn } = useContext(AuthContext);
	const router = useRouter();
	const auth = getAuth(fire);

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

	/**
	 *
	 *
	 * sign up a new user
	 */
	const handleSignUp = async () => {
		clearErrs();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				router.push('/login');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				if (
					errorCode === 'auth/email-already-in-use' ||
					errorCode === 'auth/invalid-email'
				) {
					setEmailErr(errorMessage);
				}

				if (errorCode === 'auth/weak-password') {
					setPasswordErr(errorMessage);
				}
			});
	};

	/**
	 *
	 *
	 * checks where the user is logged in or not
	 */
	const authListener = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				clearInput();
				setUser(user);
			} else {
				setUser('');
			}
		});
	};

	useEffect(() => {
		authListener();
		if (hasSignedIn) {
			router.push('/');
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
				<Input
					htmlFor="isOrg"
					label="Are you signing up as a company?"
					dropdown={true}
					handleOnChange={setIsOrg}
				/>
				<Button label="Sign Up" onClick={handleSignUp} />
				<HelperMsg
					content="Already have an account?"
					option="Sign in"
					url="login"
				/>
			</div>
		</div>
	);
};

export default SignUp;
