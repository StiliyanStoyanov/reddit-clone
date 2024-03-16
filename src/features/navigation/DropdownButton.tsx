import classNames from 'classnames'
import { DropdownButtonProps } from './types'

export function DropdownButton({ Icon, text, className, children, ...rest }: DropdownButtonProps) {
  return (
    <button className={classNames('nav-dropdown-item overlay', className)} {...rest}>
      {Icon}
      <span>{text}</span>
    </button>
  )
}
