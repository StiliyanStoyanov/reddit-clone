import { initializeApp } from '@firebase/app'
import { connectAuthEmulator, getAuth } from '@firebase/auth'
import { connectFirestoreEmulator, getFirestore } from '@firebase/firestore'
import { connectStorageEmulator, getStorage } from '@firebase/storage'
import emulatorsConfig from '../../firebase.json'
const { emulators } = emulatorsConfig
// Initialize Firebase
// https://firebase.google.com/docs/web/setup#available-libraries
const app = initializeApp({
  apiKey: 'AIzaSyDvWxSihws6RdN8P06DTBJMhPNhmJicRYI',
  authDomain: 'reddit-clone-x.firebaseapp.com',
  projectId: 'reddit-clone-x',
  storageBucket: 'reddit-clone-x.appspot.com',
  messagingSenderId: '437820401709',
  appId: '1:437820401709:web:338dcd28f69fe22683f0a4'
})

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
// Connecting to the emulators documentation
// https://firebase.google.com/docs/emulator-suite/connect_and_prototype
const isDevelopment = window.location.hostname === 'localhost'
if (isDevelopment) {
  const localhost = '127.0.0.1'
  connectAuthEmulator(auth, `http://${localhost}:${emulators.auth.port}`)
  connectFirestoreEmulator(db, localhost, emulators.firestore.port)
  connectStorageEmulator(storage, localhost, emulators.storage.port)
}

export { auth, db, storage }
