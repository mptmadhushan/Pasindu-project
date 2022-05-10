// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();