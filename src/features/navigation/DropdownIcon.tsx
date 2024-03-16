import classNames from 'classnames'

interface DropdownIconProps extends React.ComponentProps<'div'> {
  Icon: React.JSX.Element
}

export function DropdownIcon({ Icon, className, ...rest }: DropdownIconProps) {
  return (
    <div className={classNames('nav-dropdown-icon', className)} {...rest}>
      {Icon}
    </div>
  )
}
