import { FirebaseError } from 'firebase/app'
import { AuthProps, Credentials } from './types'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '@/hooks'
import { setModal } from '../modal/modalSlice'
import { Input } from './Input'
import { Tab } from '@/common/Tab'
import { Logo } from '@/assets/svg'
import { getError, rules } from './rules'
import classNames from 'classnames'
import './auth.css'

export function Auth({ id, btnText, heading, tabs, fields, action }: AuthProps) {
  const dispatch = useAppDispatch()
  const { formState, register, handleSubmit, reset, setError } = useForm<Credentials>()
  const { errors, isSubmitting, isValidating } = formState

  const onSubmit = async (data: Credentials) => {
    try {
      await action(data)
      dispatch(setModal(null))
    } catch (error) {
      if (error instanceof FirebaseError) {
        const { id, type, message } = getError(error.code)
        setError(id, { type, message })
      }
    }
  }

  return (
    <form noValidate className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="flex-center" style={{ paddingRight: 24 }}>
        <Logo width={48} height={48} />
        {heading}
      </h2>
      <div className="flex outline-bottom mb-12">
        {tabs.map(({ id: tabId, tabHeading }) => (
          <Tab
            key={tabId}
            className="shape-top-small"
            isActive={id === tabId}
            onClick={() => {
              dispatch(setModal(tabId))
              reset()
            }}
          >
            {tabHeading}
          </Tab>
        ))}
      </div>
      {fields.map((field) => {
        const id = field.id
        const error = errors[id as keyof typeof errors]
        const errorMessage = error?.message
        return <Input key={id} register={register} rules={rules[id]} errorMessage={errorMessage} {...field} />
      })}
      <button
        style={{ width: '100%', height: 40 }}
        className={classNames('button primary shape-small mt-12', {
          sending: isSubmitting,
          overlay: !isValidating,
        })}
        type="submit"
        disabled={isValidating}
      >
        {btnText}
      </button>
    </form>
  )
}
