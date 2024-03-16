import classNames from 'classnames'
import { DropdownToggleProps } from './types'

export function DropdownToggle({ Icon, isActive, className, ...buttonProps }: DropdownToggleProps) {
  return (
    <button
      className={classNames('nav-dropdown-toggle', { active: isActive }, 'flex-center', 'overlay')}
      {...buttonProps}
    >
      {Icon}
    </button>
  )
}
