import firebaseConfig from "./config/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

firebase.initializeApp(firebaseConfig);

export default firebase;