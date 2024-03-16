import classNames from 'classnames'
import { DropdownIcon } from '@/features/navigation/DropdownIcon'
import { Link, LinkProps } from 'react-router-dom'

interface DropdownLinkProps extends LinkProps {
  text: string
  Icon: React.JSX.Element
}

export function DropdownLink({ to, text, Icon, className, ...rest }: DropdownLinkProps) {
  return (
    <Link to={to} className={classNames('nav-dropdown-item overlay', className)} {...rest}>
      <DropdownIcon Icon={Icon} />
      <span>{text}</span>
    </Link>
  )
}
