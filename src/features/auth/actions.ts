import { auth, db } from '@/config/firebase'
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { Credentials } from './types'

const createUser = async ({ username, email, password }: Credentials) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  const data = {
    uid: user.uid,
    username,
  }
  await setDoc(doc(db, `users/${username}`), data).catch((error) => {
    deleteUser(user)
    throw error
  })
  return data
}

const signIn = async ({ email, password }: Credentials) => signInWithEmailAndPassword(auth, email, password)

type SignIn = typeof signIn
type CreateUser = typeof createUser
export type { SignIn, CreateUser }
export { createUser, signIn }
