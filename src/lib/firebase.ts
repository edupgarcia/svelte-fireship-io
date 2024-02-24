// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyA0Fy1jo_QmtsiX8BXYyEMu0Edet7nNrA0',
	authDomain: 'fireship-io-course-f1bdf.firebaseapp.com',
	databaseURL: 'https://fireship-io-course-f1bdf-default-rtdb.firebaseio.com',
	projectId: 'fireship-io-course-f1bdf',
	storageBucket: 'fireship-io-course-f1bdf.appspot.com',
	messagingSenderId: '931023699708',
	appId: '1:931023699708:web:f48cf16915fca411626179',
	measurementId: 'G-NRFDJNFVEW'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

// import type { PageLoad } from './$types';

// export const load = (async () => {
// 	return {};
// }) satisfies PageLoad;
