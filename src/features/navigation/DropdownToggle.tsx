import classNames from 'classnames'

interface DropdownToggleProps extends ReactButtonProps {
  Icon: React.JSX.Element
  isActive?: boolean
}

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
