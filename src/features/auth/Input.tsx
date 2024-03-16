import { InputProps } from './types'
import classNames from 'classnames'

export const Input = ({ id, label, register, rules, errorMessage, ...rest }: InputProps) => {
  return (
    <div className="auth-field-container">
      <label htmlFor={id} className="auth-label">
        {label}
      </label>
      <input
        id={id}
        {...register(id, rules)}
        className={classNames('auth-input', { 'has-error': errorMessage })}
        {...rest}
      />
      {errorMessage && <div className="auth-error">{errorMessage}</div>}
    </div>
  )
}
