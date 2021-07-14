import { useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthContext } from '../components/context/AuthContext';
import fire from '../utils/firebase';
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
					{emailErr !== '' && (
						<p className={styles.err}>{emailErr}</p>
					)}
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
					{passwordErr !== '' && (
						<p className={styles.err}>{passwordErr}</p>
					)}
				</div>
				<div className={styles.signup}>
					<button onClick={handleLogin}>Login</button>
				</div>
				<div className={styles.msg}>
					<p>
						Don't have an account?{' '}
						<span>
							<Link href="/signup">
								<a>Sign Up</a>
							</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
