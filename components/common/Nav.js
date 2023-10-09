import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { JobContext } from '../context/JobContext';
import fire from '../../utils/firebase';
import styles from '../../styles/nav.module.css';
import { getAuth, signOut } from "firebase/auth";


const Nav = () => {
	const auth = getAuth();

	const {
		hasSignedIn: val,
		setHasSignedIn: setVal,
		isOrg
	} = useContext(AuthContext);
	const { setUserJobs } = useContext(JobContext);
	const [hasSignedIn, setHasSignedIn] = useState(val);

	useEffect(() => {
		const signedIn = localStorage.getItem('hasSignedIn');
		setHasSignedIn(signedIn);
	}, []);

	/**
	 *
	 *
	 * log out user from the system
	 */
	const handleLogout = () => {
		signOut(auth).then(() => {
			setHasSignedIn(false);
			setVal(false);
			setUserJobs([]);
			localStorage.setItem('hasSignedIn', false);
			localStorage.setItem('email', null);
		}).catch((error) => {
			console.log(error);
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<div className={styles.img_container}>
					<Link href="/">
						<>
							<Image
								src="/logo.png"
								alt="jobboard"
								width={200}
								height={70}
							/>
						</>
					</Link>
				</div>
				<div className={styles.links_container}>
					{!val ? (
						<>
							<Link href="/login">
								<div className={styles.links}>
									<>Login</>
								</div>
							</Link>
							<Link href="/signup">
								<div className={styles.links}>
									<>Sign Up</>
								</div>
							</Link>
						</>
					) : (
						<>
							<Link href="/dashboard">
								<div className={styles.links}>
									<>Dashboard</>
								</div>
							</Link>
							<Link href="/">
								<div
									className={styles.links}
									onClick={handleLogout}
								>
									<>Logout</>
								</div>
							</Link>
						</>
					)}

					<div>
						{val ? (
							isOrg ? (
								<Link href="/hire">
									<>
										<button>Post a Job</button>
									</>
								</Link>
							) : null
						) : (
							<Link href="/login">
								<>
									<button>Post a Job</button>
								</>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
