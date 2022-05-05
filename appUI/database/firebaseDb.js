// import * as firebase from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: 'AIzaSyBcMrPk8lgzKeApc7HAT_inL4AavrDq5qg',
	authDomain: 'notes-app-89d2f.firebaseapp.com',
	projectId: 'notes-app-89d2f',
	storageBucket: 'notes-app-89d2f.appspot.com',
	databaseURL: 'https://notes-app-89d2f.firebaseio.com',
	messagingSenderId: '1031773313369',
	appId: '1:1031773313369:web:69b48d354d209ff1ead448',
	measurementId: 'G-4TK1P9HQE8'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
