import { ApiErrorsMap, CustomError } from './types'

const required = 'Field is required'
const passwordMin = 'Password must be at least 6 characters'
const passwordMax = 'Password cannot exceed 254 characters'
const usernameMin = 'Username must be at least 3 characters'
const usernameMax = 'Username cannot exceed 24 characters'
const invalidEmail = 'The email address is improperly formatted'
const emailExists = 'The email is already in use'
const wrongPassword = 'The password is incorrect'
const userDisabled = 'The user account has been disabled.'
const userNotFound = 'There is no user corresponding to this email'
const uidExists = 'The username is already taken'

const validateUsername = (value: string) => {
  const regex = /[a-zA-Z0-9_-]+/
  if (!regex.test(value)) {
    return 'Only letters, numbers, dashes and underscores allowed'
  }
  return true
}
const validatePassword = (id: string) => (value: string, formValues: Record<string, string | undefined>) => {
  if (value === formValues[id]) {
    return true
  }
  return 'Passwords do not match'
}

const rules = {
  username: {
    required: { value: true, message: required },
    minLength: { value: 3, message: usernameMin },
    maxLength: { value: 24, message: usernameMax },
    validate: validateUsername,
  },
  email: {
    required: { value: true, message: required },
  },
  password: {
    required: { value: true, message: required },
    minLength: { value: 6, message: passwordMin },
    maxLength: { value: 254, message: passwordMax },
  },
  confirmPassword: {
    required: { value: true, message: required },
    minLength: { value: 6, message: passwordMin },
    maxLength: { value: 254, message: passwordMax },
    validate: validatePassword('password'),
  },
}

const apiErrors: ApiErrorsMap = {
  'auth/invalid-email': {
    id: 'email',
    message: invalidEmail,
  },
  'auth/email-already-in-use': {
    id: 'email',
    message: emailExists,
  },
  'auth/invalid-password': {
    id: 'password',
    message: wrongPassword,
  },
  'auth/wrong-password': {
    id: 'password',
    message: wrongPassword,
  },
  'auth/user-disabled': {
    id: 'email',
    message: userDisabled,
  },
  'auth/user-not-found': {
    id: 'email',
    message: userNotFound,
  },
  'auth/uid-already-exists': {
    id: 'username',
    message: uidExists,
  },
  'permission-denied': {
    id: 'username',
    message: uidExists,
  },
}

// https://github.com/react-hook-form/react-hook-form/releases/tag/v7.43.0-next.0
function getError(code: string): CustomError {
  const error = apiErrors[code]
  if (!error) return { id: 'root.serverError', type: 'server', message: 'Internal server error' }
  return { ...error, type: 'custom' }
}

export { getError, rules }
