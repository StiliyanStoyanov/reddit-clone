import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/functions"
import "firebase/storage"
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.app().firestore();
export const auth = firebase.app().auth();
export const storage = firebase.app().storage();
export const functions = firebase.app().functions('europe-west3');
if (window.location.hostname === 'localhost') {
    console.log("testing locally -- hitting local functions and firestore emulators");
    firestore.settings({host: 'localhost:8080', ssl: false})
    firestore.useEmulator('localhost', 8080);
    storage.useEmulator("localhost", 9199);
    auth.useEmulator('http://localhost:9099/');
    functions.useEmulator('localhost', 5001);
}
export default firebase;
