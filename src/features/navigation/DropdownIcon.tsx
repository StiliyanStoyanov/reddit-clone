import classNames from 'classnames'

interface DropdownIconProps extends ReactDivProps {
  Icon: React.JSX.Element
}

export function DropdownIcon({ Icon, className, ...rest }: DropdownIconProps) {
  return (
    <div className={classNames('nav-dropdown-icon', className)} {...rest}>
      {Icon}
    </div>
  )
}
