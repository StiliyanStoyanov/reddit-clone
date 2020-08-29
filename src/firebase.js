import firebaseConfig from "./config/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/functions"
firebase.initializeApp(firebaseConfig);
if (window.location.hostname === 'localhost') {
    console.log("testing locally -- hitting local functions and firestore emulators");
    firebase.functions().useFunctionsEmulator('http://localhost:5001');
    firebase.firestore().settings({
        host: 'localhost:8080',
        ssl: false
    });
}

export default firebase;