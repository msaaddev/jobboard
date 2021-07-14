import { useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/context/AuthContext';
import fire from '../utils/firebase';
import styles from '../styles/auth.module.css';

const SignUp = () => {
	const { user, setUser } = useContext(AuthContext);
	const { email, setEmail } = useContext(AuthContext);
	const { password, setPassword } = useContext(AuthContext);
	const { emailErr, setEmailErr } = useContext(AuthContext);
	const { passwordErr, setPasswordErr } = useContext(AuthContext);
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

		fire.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				router.push('/');
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
					<input
						type="email"
						autoFocus
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={styles.input}
					/>
					{emailErr !== '' && <p className={styles.err}></p>}
				</div>
				<div className={styles.password}>
					<label htmlFor="password" className={styles.label}>
						Password
					</label>
					<input
						type="password"
						required
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className={styles.input}
					/>
					{passwordErr !== '' && <p className={styles.err}></p>}
				</div>
				<div className={styles.signup}>
					<button onClick={handleSignUp}>Sign Up</button>
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
