import { getApp, getApps, initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	// update credentials here
};

let fire;

if (!getApps().length) {
	// Initialize the Firebase app if it doesn't exist
	fire = initializeApp(firebaseConfig);
} else {
	// If the app already exists, get a reference to it
	fire = getApp();
}

export default fire;
