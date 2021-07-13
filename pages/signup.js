import { useState, useEffect } from 'react';
import Link from 'next/link';
import fire from '../utils/firebase';
import styles from '../styles/authentication.module.css';

const SignUp = () => {
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [passwordErr, setPasswordErr] = useState('');
	const [hasAccount, setHasAccount] = useState(false);

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
		try {
			const { signInWithEmailAndPassword } = fire.auth();

			await signInWithEmailAndPassword(email, password);
		} catch (err) {
			const { code, msg } = err;

			if (
				code === 'auth/invalid-email' ||
				code === 'auth/user-disabled' ||
				code === 'auth/user-not-found'
			) {
				setEmailErr(msg);
			}

			if (code === 'auth/wrong-password') {
				setPasswordErr(msg);
			}
		}
	};

	/**
	 *
	 *
	 * sign up a new user
	 */
	const handleSignUp = async () => {
		clearErrs();
		try {
			const { createUserWithEmailAndPassword } = fire.auth();

			await createUserWithEmailAndPassword(email, password);
		} catch (err) {
			const { code, msg } = err;

			if (
				code === 'auth/email-already-in-use' ||
				code === 'auth/invalid-email'
			) {
				setEmailErr(msg);
			}

			if (code === 'auth/weak-password') {
				setPasswordErr(msg);
			}
		}
	};

	/**
	 *
	 *
	 * log out user from the system
	 */
	const handleLogout = () => {
		fire.auth().signOut();
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
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<div className={styles.email}>
					<label htmlFor="email" className={styles.label}>
						Email
					</label>
					<input type="email" className={styles.input} />
					{emailErr !== '' && <p className={styles.err}></p>}
				</div>
				<div className={styles.password}>
					<label htmlFor="password" className={styles.label}>
						Password
					</label>
					<input type="password" className={styles.input} />
					{passwordErr !== '' && <p className={styles.err}></p>}
				</div>
				<div className={styles.signup}>
					<button>Sign Up</button>
				</div>
				<div className={styles.msg}>
					<p>
						Already have an account?{' '}
						<span>
							<Link href="/login">
								<a>Sign in</a>
							</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
