import { FormFields } from './types'

export const fields: FormFields = {
  username: {
    id: 'username',
    name: 'username',
    type: 'text',
    label: 'Username',
    autoComplete: 'username',
  },
  email: {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
    autoComplete: 'email',
  },
  password: {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Password',
    autoComplete: 'new-password',
  },
  confirmPassword: {
    id: 'confirmPassword',
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    autoComplete: 'new-password',
  },
}
