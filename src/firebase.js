import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/functions"
import "firebase/storage"
const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const functions = app.functions('europe-west3')
if (window.location.hostname === 'localhost') {
    console.log("testing locally -- hitting local functions and firestore emulators");
    firestore.settings({host: 'localhost:8080', ssl: false})
    firestore.useEmulator('localhost', 8080);
    storage.useEmulator("localhost", 9199);
    auth.useEmulator('http://localhost:9099/');
    functions.useEmulator('localhost', 5001);
}
export default firebase;
