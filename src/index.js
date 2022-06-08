import './css/main.scss';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button'),
  name: document.querySelector('input[name="name"]'),
  pass: document.querySelector('input[name="password"]'),
};

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
// console.log(app);
// console.log(db);

refs.submitBtn.addEventListener('click', onSubmitBtnClick);

function writeData(id, name, pass, movies) {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const userData = ref(db, `User${id}Info`);

  set(userData, {
    userid: id,
    username: name,
    password: pass,
    movies,
  });
  onValue(userData, snapshot => {
    const data = snapshot.val();
    console.log(data);
  });
}

function onSubmitBtnClick(e) {
  e.preventDefault();
  const name = refs.name.value;
  const pass = refs.pass.value;
  const id = 1;
  const movies = [1, 2, 3, 4, 5];
  writeData(id, name, pass, movies);
}
