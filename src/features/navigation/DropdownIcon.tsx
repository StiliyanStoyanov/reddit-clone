import classNames from 'classnames'
import { DropdownIconProps } from './types'

export function DropdownIcon({ Icon, className, ...rest }: DropdownIconProps) {
  return (
    <div className={classNames('nav-dropdown-icon', className)} {...rest}>
      {Icon}
    </div>
  )
}
