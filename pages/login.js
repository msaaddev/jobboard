import { useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/context/AuthContext';
import fire from '../utils/firebase';
import Input from '../components/common/Input';
import HelperMsg from '../components/common/HelperMsg';
import Button from '../components/common/Button';
import styles from '../styles/auth.module.css';

const Login = () => {
	const { user, setUser } = useContext(AuthContext);
	const { email, setEmail } = useContext(AuthContext);
	const { password, setPassword } = useContext(AuthContext);
	const { emailErr, setEmailErr } = useContext(AuthContext);
	const { passwordErr, setPasswordErr } = useContext(AuthContext);
	const { setHasSignedIn, hasSignedIn } = useContext(AuthContext);
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
	 * logs in the systems
	 */
	const handleLogin = async () => {
		clearErrs();

		fire.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				router.push('/dashboard');
				setHasSignedIn(true);
			})
			.catch((err) => {
				const { code, message } = err;

				if (
					code === 'auth/invalid-email' ||
					code === 'auth/user-disabled' ||
					code === 'auth/user-not-found'
				) {
					setEmailErr(message);
				}

				if (code === 'auth/wrong-password') {
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
					autoFocus={false}
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
