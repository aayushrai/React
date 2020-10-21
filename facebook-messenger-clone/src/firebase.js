import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 apiKey: "AIzaSyAdFQLdjGSdZvigcOLFtcPiWcgIXIuLEu8",
  authDomain: "facebook-messenger-clone-ca575.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-ca575.firebaseio.com",
  projectId: "facebook-messenger-clone-ca575",
  storageBucket: "facebook-messenger-clone-ca575.appspot.com",
  messagingSenderId: "700666149684",
  appId: "1:700666149684:web:90539773c3c1096d88c361",
  measurementId: "G-SKR6VT8PWZ"

});
const db = firebaseApp.firestore();

export default db;