import { Auth } from '../auth/Auth'
import { fields } from '../auth/fields'
import { AuthTab } from '../auth/types'
import { createUser, signIn } from '../auth/actions'

// https://stackoverflow.com/questions/52856496/typescript-object-keys-return-string
const { username, email, password, confirmPassword } = fields
const tabs: AuthTab[] = [
  { id: 'signUp', tabHeading: 'Sign Up' },
  { id: 'signIn', tabHeading: 'Sign In' },
]

export const contentMap = {
  signUp: {
    Component: Auth,
    componentProps: {
      id: 'signUp',
      heading: 'Create your account',
      btnText: 'Sign Up',
      tabs,
      fields: [username, email, password, confirmPassword],
      action: createUser,
    },
    modalProps: {
      containerProps: { className: 'auth-modal-container' },
    },
  },
  signIn: {
    Component: Auth,
    componentProps: {
      id: 'signIn',
      heading: 'Sign In',
      tabs,
      btnText: 'Sign In',
      fields: [email, password],
      action: signIn,
    },
    modalProps: {
      containerProps: { className: 'auth-modal-container' },
    },
  },
}

export type ModalIds = keyof typeof contentMap | null
