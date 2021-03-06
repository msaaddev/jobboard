import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/context/AuthContext';
import Input from '../components/common/Input';
import HelperMsg from '../components/common/HelperMsg';
import Button from '../components/common/Button';
import fire from '../utils/firebase';
import styles from '../styles/auth.module.css';

const SignUp = () => {
	const { user, setUser } = useContext(AuthContext);
	const { email, setEmail } = useContext(AuthContext);
	const { password, setPassword } = useContext(AuthContext);
	const { emailErr, setEmailErr } = useContext(AuthContext);
	const { passwordErr, setPasswordErr } = useContext(AuthContext);
	const { isOrg, setIsOrg } = useContext(AuthContext);
	const { hasSignedIn } = useContext(AuthContext);
	const router = useRouter();

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
		const db = fire.firestore();

		fire.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				db.collection('users')
					.doc(email)
					.set({
						email: email,
						isOrg: isOrg === 'false' ? false : true,
						jobList: []
					})
					.then(() => {
						router.push('/login');
					})
					.catch((err) => {
						console.error('Error adding document: ', err);
					});
			})
			.catch((err) => {
				const { code, message } = err;

				if (
					code === 'auth/email-already-in-use' ||
					code === 'auth/invalid-email'
				) {
					setEmailErr(message);
				}

				if (code === 'auth/weak-password') {
					setPasswordErr(message);
				}
			});
	};

	/**
	 *
	 *
	 * checks where the user is logged in or not
	 */
	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
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
