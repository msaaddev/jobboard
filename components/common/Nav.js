import styles from '../../styles/nav.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<div className={styles.img_container}>
					<Image
						src="/logo.png"
						alt="jobboard"
						width={200}
						height={70}
					/>
				</div>
				<div className={styles.links_container}>
					<div className={styles.links}>
						<Link href="/">
							<a>Login</a>
						</Link>
					</div>
					<div className={styles.links}>
						<Link href="/">
							<a>Sign Up</a>
						</Link>
					</div>
					<div>
						<button>Post a Job</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
