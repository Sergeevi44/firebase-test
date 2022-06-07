import './sass/main.scss';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDo1183-PB_7A9qygtI9_TfvjKvLJSyPDA',
  authDomain: 'test-firebase-377da.firebaseapp.com',
  databaseURL: 'https://test-firebase-377da-default-rtdb.firebaseio.com',
  projectId: 'test-firebase-377da',
  storageBucket: 'test-firebase-377da.appspot.com',
  messagingSenderId: '1000137961183',
  appId: '1:1000137961183:web:a6ceb146b1a5991749c36a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(app);
console.log(db);
