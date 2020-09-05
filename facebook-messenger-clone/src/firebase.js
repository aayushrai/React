import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdFQLdjGSdZvigcOLFtcPiWcgIXIuLEu8",
  authDomain: "facebook-messenger-clone-ca575.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-ca575.firebaseio.com",
  projectId: "facebook-messenger-clone-ca575",
  storageBucket: "facebook-messenger-clone-ca575.appspot.com",
  messagingSenderId: "700666149684",
  appId: "1:700666149684:web:0b7782ccc27a294088c361",
  measurementId: "G-069N4Y1M4H"

});
const db = firebaseApp.firestore();

export default db;