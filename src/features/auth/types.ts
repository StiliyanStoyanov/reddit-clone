import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form'
import { SignIn, CreateUser } from './actions'

export type Credentials = {
  username?: string
  email: string
  password: string
  confirmPassword?: string
}
export type FieldId = keyof Credentials
export type ErrorId = FieldId | `root.${string}` | 'root'
export type FieldType = React.HTMLInputTypeAttribute

export type AuthTab = { id: 'signUp' | 'signIn'; tabHeading: string }
export type FormField = {
  id: FieldId
  name: FieldId
  type: FieldType
  label: string
  autoComplete: string
}
export type FormFields = Record<FieldId, FormField>
export type ApiErrorsMap = Record<string, { id: ErrorId; message: string } | undefined>

export type CustomError = {
  id: ErrorId
  type: string
  message: string
}

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: FieldId
  label: string
  type: string
  name: string
  register: (id: FieldId, options?: RegisterOptions) => UseFormRegisterReturn
  rules: RegisterOptions
  errorMessage?: string
}

export interface AuthProps extends React.PropsWithChildren {
  id: string
  heading: string
  btnText: string
  tabs: { id: 'signIn' | 'signUp'; tabHeading: string }[]
  fields: FormField[]
  action: SignIn | CreateUser
}

export type { SignIn, CreateUser }
