// const firebaseConfig = {

//   };

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3-XRkrYKum1_1USSfIx3RgJMbrJRj1NU",
    authDomain: "todo-app-cp-541b1.firebaseapp.com",
    databaseURL: "https://todo-app-cp-541b1.firebaseio.com",
    projectId: "todo-app-cp-541b1",
    storageBucket: "todo-app-cp-541b1.appspot.com",
    messagingSenderId: "296754870438",
    appId: "1:296754870438:web:c578de3c81c6fef726dc67",
    measurementId: "G-1MT6VHZPBM"
});

const db = firebaseApp.firestore();
export default db;